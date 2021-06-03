import React from "react";
import Video from "../../../assets/logo.png";
import Video2 from "../../../assets/Mobile-morph.gif";
import Footer from "../../../common/components/Footer";
import Auth from "../Auth";
import "./mobile.scss";

import WhiteLogo from "../../../assets/white-logo.png";
import graphic from "../../../assets/creative-thinking.svg";

const MobileView = () => {
  return (
    <div className="content-container-mobile">
      <div className="row auth-container-mobile">
        <div className="left-area-mobile col s12 m12 l12">
          <div className="row">
            
            <div className="col s12 m12 l12">
              <img src = {WhiteLogo}
              style={{
                width: "50%",
                height: "auto",
                position: "relative",
                padding: "15%",
              }}/>
            </div>
          </div>
        </div>
        <div className="auth-area-mobile  col s12 m12 l12">
          <Auth />
        </div>
      </div>
      <div className="row info-container" style={{ paddingTop: "10%" }}>
        <div className="col s12 m12 l12">
          <h2 style={{ fontSize: "22px", paddingTop: "0", lineHeight: "1.5" }}>
            At <span id="blue">Vizcom</span> we are building tools that shorten
            the distance between having an idea and bringing it to life by
            enabling <span id="blue">generative creativity.</span>
          </h2>
        </div>
        <div className="col s12 m12 l12">
          <div className="video-mask">
            <img src ={Video2}  
              style={{
                width: "100%",
                height: "auto",
                position: "relative",
                paddingTop: "10%",
              }}
            />
            </div>
        </div>
      </div>

      {/* <div className=" row graph-container-mobile">
        <div className="col s12 m12 l12">
          <h2>Work Flow</h2>
          <p>
            In the early stage of creative thinking, the final idea is usually
            uncertain. What if we could dismantle each step of creative thinking
            and allocate tasks accordingly.
          </p>
          <img
            src={graphic}
            style={{ paddingTop: "10%", paddingBottom: "10%" }}
          />
        </div>
      </div> */}
      <div className="footer-container">
        <Footer darkmode="dark" />
      </div>
    </div>
  );
};

export default MobileView;
