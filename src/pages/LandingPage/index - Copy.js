import React, { useEffect } from "react";
import Video from "../../assets/LandingVideo.mp4";
import Video2 from "../../assets/morph.mp4";
import Footer from "../../common/components/Footer";
import Auth from "./Auth";
import "./LandingPage.scss";
import { Desktop, Tablet, Mobile } from "./Responsive/responsive";
import TabletView from "./Responsive/tablet";
import MobileView from "./Responsive/mobile";
import WhiteLogo from "../../assets/logo.png";
import graphic from "../../assets/creative-thinking.svg";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "recompose";

const LandingPage = ({ authUser, history }) => {
  useEffect(() => {
    if (authUser) {
      history.push("/home");
    }
  }, []);

  return (
    <div>
      <Desktop>
        <div className="content-container">
          <div className="row">
            <div className="left-area col s8 m8 l8">
              <div className="row">
                <div className="col s4 m4 l4">
                  <img alt="white logo" className="logo" src={WhiteLogo} />
                  <p>Accelerate your creative process.</p>
                </div>
                <div className="col s8 m8 l8">
                  <video
                    style={{
                      width: "100%",
                      height: "720px",
                      position: "relative",
                    }}
                    muted
                    loop
                    autostart
                    playsInline
                    autoPlay
                    src={Video}
                    type="video/mp4"
                  />
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
                At <span id="blue">Vizcom</span> we are building tools that
                shorten the distance between having an idea and bringing it to
                life by enabling <span id="blue">generative creativity.</span>
              </h2>
            </div>
            <div className="col s7 m7 l7">
              <div className="video-mask">
                <video
                  style={{
                    width: "100%",
                    height: "750px",
                    position: "relative",
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

        
          <div className="footer-container">
            <Footer />
          </div>
        </div>
      </Desktop>

      <Tablet>
        <TabletView />
      </Tablet>
      <Mobile>
        <MobileView />
      </Mobile>
    </div>
  );
};

const mapStateToProps = (state) => ({
  authUser: state.session.authUser,
});

export default compose(withRouter, connect(mapStateToProps))(LandingPage);
