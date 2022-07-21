import React from 'react';
// import bookVideo from '../../assets/video/bookVideo.mp4';
import BGVideo from './../bg-video/BGVideo.js'
import './../../components/home-section/home-section.styles.scss'
import '../../App.css';

const HomeSection = () => {
  return (
    <div className='home-container'>



      <BGVideo 
    autoPlay
    loop
    playsInline
    muted 
    src="../../assetts/videos/bookVideo.mp4" 
    type="video/mp4" 
 />
       
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