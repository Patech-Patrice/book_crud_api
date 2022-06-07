import { useRef, useContext } from 'react';
import classes from './ProfileForm.module.css';
import AuthContext from '../../store/auth-context';
import { useNavigate } from 'react-router-dom';

const ProfileForm = () => {
  const newPasswordInputRef = useRef();

  //grabs token
  const authCtx = useContext(AuthContext);

  const navigate = useNavigate();
  
  const submitHandler = (event) => {
    event.preventDefault();

    const enteredNewPassword = newPasswordInputRef.current.value;

    fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyA2DcHQSl-99p7WhPUjLFFNOpPHHljh-sQ', {
      method: 'POST',
      body: JSON.stringify({
        idToken: authCtx.token,
        password: enteredNewPassword,
        returnSecureToken: false
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => {
      //succeeds
      alert('Password successfully changed!');
      navigate('/')

    })
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <h2>Change Password </h2>
        <label htmlFor='new-password'>New Password</label>
        <input type='password' id='new-password' minLength="7"  ref={newPasswordInputRef}/>
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;
