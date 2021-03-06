import React from "react";
import Video from "../../assets/LandingVideo.mp4";

import Auth from "./Auth";

import WhiteLogo from "../../assets/logo.png";

const LandingPage = () => {
  return (
    <div className="content-container">
      <div className="row">
        <div className="left-area col s8 m8 l8">
          <div className = "row">
            <div className = "col s4 m4 l4">
              <img className ='logo'src={WhiteLogo} />
              <p>Accelerate your creative process.</p>    
            </div>
            <div className = "col s8 m8 l8">
              <video style = {{width:'100%',height:'720px',position:'relative'}} muted loop autostart autoPlay src={Video} type="video/mp4" />    
            </div>
          </div>          
        </div>
        <div className="auth-area col s4 m4 l4">
          <Auth />
        </div>
      </div>
      <div className="row info-container">
        <div className="col s5 m5 l5">
          <h2>
            Vizcom is building tools that shorten the distance between having an
            idea and bringing it to life.
          </h2>
        </div>
        <div className="col s7 m7 l7">
          <img src="https://via.placeholder.com/850x750" />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
