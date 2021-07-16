import React, { useEffect, useLayoutEffect, useState } from "react";
import Video from "../../../assets/LandingVideo.mp4";
import Video2 from "../../../assets/morph.mp4";
import Footer from "../../../common/components/Footer";
import Auth from "../Auth";
import "./Login.scss";
import { Desktop, Tablet, Mobile } from "../Responsive/responsive";
import TabletView from "../Responsive/tablet";
import MobileView from "../Responsive/mobile";
import WhiteLogo from "../../../assets/logo-white.png";
import { Button, Card } from "antd";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import { compose } from "recompose";

const LogIn = ({ authUser, history, match }) => {
  const [inviteId, setinviteId] = useState("");
  useEffect(() => {
    if (authUser) {
      history.push("/home");
    }
  }, []);

  useLayoutEffect(() => {
    return () => {
      const inviteId = localStorage.getItem("inviteId");
      if (inviteId) {
        history.push(`/sketch-to-render/invite/${inviteId}`);
      }
    };
  }, []);

  return (
    <div>
      <Desktop>
        <div className="loginpage-container">
          <div className="row landing-nav-bar">
            <Link to="/">
              <img src={WhiteLogo} />
            </Link>
            <Link to="/signin">
              <Button className="sign-up-btn" type="primary">
                Sign up
              </Button>
            </Link>
            <Link to="/signin">
              <p>Log in</p>
            </Link>
          </div>
          <div className="row">
            <div className="col s12 m12 l12 login-container">
              <div className="auth-area ">
                <Auth />
              </div>
            </div>
          </div>
          <div className="footer-container">
            <Footer />
          </div>
        </div>
      </Desktop>

      <Tablet>
        <div className="loginpage-container">
          <div className="row landing-nav-bar">
            <Link to="/">
              <img src={WhiteLogo} />
            </Link>
            <Link to="/signin">
              <Button className="sign-up-btn" type="primary">
                Sign up
              </Button>
            </Link>
            <Link to="/signin">
              <p>Log in</p>
            </Link>
          </div>
          <div className="row">
            <div className="col s12 m12 l12 login-container-mobile">
              <div className="auth-area" style={{ paddingBottom: "20%" }}>
                <Auth />
              </div>
            </div>
          </div>
          <div className="footer-container">
            <Footer />
          </div>
        </div>
      </Tablet>
      <Mobile>
        <div className="loginpage-container-mobile">
          <div className="row landing-nav-bar">
            <Link to="/">
              <img src={WhiteLogo} />
            </Link>
            <Link to="/signin">
              <Button className="sign-up-btn" type="primary">
                Sign up
              </Button>
            </Link>
            <Link to="/signin">
              <p>Log in</p>
            </Link>
          </div>
          <div className="row">
            <div className="col s12 m12 l12 login-container-mobile">
              <div className="auth-area ">
                <Auth />
              </div>
            </div>
          </div>
          <div className="footer-container">
            <Footer />
          </div>
        </div>
      </Mobile>
    </div>
  );
};

const mapStateToProps = (state) => ({
  authUser: state.session.authUser,
});

export default compose(withRouter, connect(mapStateToProps))(LogIn);
