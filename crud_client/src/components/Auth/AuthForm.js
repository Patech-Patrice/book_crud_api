import { useState, useRef, useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../store/auth-context';

import classes from './AuthForm.module.css';

const AuthForm = () => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const [isLogin, setIsLogin] = useState(true);

  const navigate = useNavigate();

  const authCtx = useContext(AuthContext);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };


  const submitHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;


    let url; 
    if (isLogin) {
      url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyA2DcHQSl-99p7WhPUjLFFNOpPHHljh-sQ';
    } else {
      url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyA2DcHQSl-99p7WhPUjLFFNOpPHHljh-sQ'
      }
      fetch(url, {
        method: 'POST',
        body: JSON.stringify({
          email: enteredEmail,
          password: enteredPassword,
          returnSecureToken: true
          }),
          headers:{
            'Content-Type': 'application/json'
          }
        }
      ).then(res => {
        if (res.ok) {
          return res.json();
        } else {
         return res.json().then(data => {
            //show error modal or message
            let errorMessage = 'Authentication failed! Password must be at least 6 characters and include numbers';
            // if (data && data.error && data.error.message) {
            //   errorMessage = data.error.message;
            //   console.log(data);
            // }
            alert(errorMessage);
            throw new Error(errorMessage);
          });
        }
      }).then(data => {
        //user has been successfully created store token
       //construct new timestamp based on token expiration time
       //sets a timer to expire 1 hr after default
        const expirationTime = new Date(new Date().getTime() + (+data.expiresIn * 1000));
         //set token with auth context
        authCtx.login(data.idToken, expirationTime.toISOString());
        navigate('/books');
      }).catch(err => {
        alert(err.message);
      });
   };
  
  return (
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input type='email' id='email' required ref={emailInputRef}/>
        </div>
        <div className={classes.control}> 
          <label htmlFor='password'>Your Password</label>
          <input type='password' id='password' required ref={passwordInputRef} />
        </div>
        <div className={classes.actions}>
          <button>{isLogin ? 'Login' : 'Create Account'}</button>
          <button
            type='button'
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
