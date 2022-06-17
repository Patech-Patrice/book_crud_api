import classes from './StartingPageContent.module.css';
import background from "../../images/placeholder.jpg";
import HomeSection from './../../components/home-section/HomeSection.js';
import { Link } from 'react-router-dom';

const StartingPageContent = () => {
  return (
    <section className={classes.starting}>

    


      <HomeSection /> 
         
    </section>
   
  );
};

export default StartingPageContent;
