import React from 'react';
import bookVideo from '../../assets/video/bookVideo.mp4';
import './../../components/home-section/home-section.styles.scss'
import '../../App.css';

const HomeSection = () => {
  return (
    <div className='home-container'>


   <video autoPlay loop muted >
      <source src={bookVideo} type="video/mp4"/>
     </video>
   
        {/* <video src={bookVideo} autoPlay loop muted /> */}
        <div>
          <section>
        <h1 style={{color: 'purple'}}>Welcome to Book Logger</h1><br/>
        </section>
        </div>
        <p>DISCOVER YOUR NEXT FAVORITE NOVEL</p>
        <p>What are you waiting for?</p>
        
        <a href="auth">Please login or create an account to get started.</a>
   
    </div>
  )
}

export default HomeSection;