import classes from './StartingPageContent.module.css';
import background from "/Users/patricedrayton/book_crud_api/crud_client/src/images/placeholder.jpg";
import { Link } from 'react-router-dom';

const StartingPageContent = () => {
  return (
    <section className={classes.starting}>
          <div style={{ backgroundImage: `url(${background})`, height: '500px' , backgroundSize: 'cover' }}>
      </div>
      <h1 style={{color: 'red'}}>Welcome to Book Logger</h1>
      <p> This app allows you to add your favorite books to a collection of novels.</p> 
      <a href="auth">Please login or create an account to get started.</a>
    </section>
  );
};

export default StartingPageContent;
