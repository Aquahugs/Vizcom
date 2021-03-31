import React from "react";
import Video from "../../../assets/LandingVideo.mp4";
import Video2 from "../../../assets/morph.mp4";
import Footer from "../../../common/components/Footer";
import Auth from "../Auth";
import "./tablet.scss";

import WhiteLogo from "../../../assets/logo.png";
import graphic from "../../../assets/creative-thinking.svg";

const TabletView = () => {
  return (
    <div className="content-container-tablet">
      <div className="row auth-container">
        <div className="left-area-tablet col s12 m12 l12">
          <div className="row">
            <div className="col s12 m12 l12">
              <img alt="white logo" className="logo" src={WhiteLogo} />
            </div>
            <div className="col s12 m12 l12">
              <video
                style={{
                  width: "100%",
                  height: "320px",
                  position: "relative",
                  padding: "5%",
                }}
                muted
                loop
                autostart
                autoPlay
                src={Video}
                type="video/mp4"
              />
            </div>
          </div>
        </div>
        <div className="auth-area-tablet  col s12 m12 l12">
          <Auth />
        </div>
      </div>
      <div className="row info-container" style={{ paddingTop: "10%" }}>
        <div className="col s5 m5 l5">
          <h2 style={{ fontSize: "28px", paddingTop: "0" }}>
            At <span id="blue">Vizcom</span> we are building tools that shorten
            the distance between having an idea and bringing it to life by
            enabling <span id="blue">generative creativity.</span>
          </h2>
        </div>
        <div className="col s7 m7 l7">
          <div class="video-mask">
            <video
              style={{
                width: "100%",
                height: "auto",
                position: "relative",
                paddingTop: "10%",
              }}
              muted
              loop
              autostart
              autoPlay
              src={Video2}
              type="video/mp4"
            />
          </div>
        </div>
      </div>

      <div className=" row graph-container">
        <div className="col s12 m12 l12">
          <h2>New Work Flow</h2>
          <p>
            In the early stage of creative thinking, the final idea is usually
            uncertain. What if we could dismantle each step of creative thinking
            and allocate tasks accordingly.
          </p>
          <img alt="graphic" src={graphic} />
        </div>
      </div>
      <div className="footer-container">
        <Footer />
      </div>
    </div>
  );
};

export default TabletView;
