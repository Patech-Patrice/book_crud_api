import React, { Component } from "react";
import ProfileForm from './ProfileForm';
import classes from './UserProfile.module.css';
import imgHome from './../../images/img-home.jpg'

class UserProfile extends Component {

  render() {
    return (
        <div className="row">
            <div className="card-body">            
                <div>
                   <img src={imgHome} alt="home" className="card-img-top"/>
                </div>
             <section className={classes.profile}>
               <ProfileForm />
            </section>
           </div>
        </div>

    );
  }
}

export default UserProfile;
