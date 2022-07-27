import classes from './StartingPageContent.module.css';
import HomeSection from './../../components/home-section/HomeSection.js';

const StartingPageContent = () => {
  return (
    <section className={classes.starting}>
      <HomeSection />   
    </section>
   
  );
};

export default StartingPageContent;
