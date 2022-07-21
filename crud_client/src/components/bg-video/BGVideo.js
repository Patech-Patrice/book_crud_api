import React from 'react';
import bookVideo from '../../assets/video/bookVideo.mp4';
import './../../components/home-section/home-section.styles.scss'
import '../../App.css';

const BGVideo = () => {
  return (
    <div className='home-container'>
         {/* <video>
           <source src={bookVideo} type="video/mp4" />
         </video> */}

<video autoPlay loop muted="true" >
      <source src={bookVideo} type="video/mp4"/>
     </video>
        <div>
       
        </div>
  
   
    </div>
  )
}

export default BGVideo;