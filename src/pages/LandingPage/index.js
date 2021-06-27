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
import { Button } from 'antd';
import { Row } from 'antd';
import { Col } from 'antd';
import 'antd/dist/antd.css';
import "inter-ui/inter.css";

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
          <div className = "row">
            <div className = "col s12 m12 l12 landing-banner">
              <div style = {{padding:"20%",paddingBottom:'10%'}}>
                <h1>We're reimaging the way artist and designers create.</h1>
                <p> Ai enabled creative tools that shorten the distance between having an idea and bringing it to life.</p>
                <div className = "row intro-btn-container">
                  <div className = "col s6 m6 l6">
                    <Button className="get-started" type="primary">Get Started</Button>
                  </div>
                  <div className = "col s6 m6 l6">
                    <Button type="primary" shape="circle">A</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className = " demo-container">
            <div className = "demo-video">
              <img src = "https://place-hold.it/900x400"/>
            </div>
          </div>
          <div className = "row quote">
            <h1 style = {{color:"white"}}>Quite an interesting tool that will shape a transportation designer’s job in the near future : Selecting ideas and curating the AI’s generated design. Interesting...</h1>
          </div>
          <div className = "row quote2">
            <h2>Machines that assist humans in <br/>creative thinking.</h2>
            <img src = "https://via.placeholder.com/750x350"/>
          </div>
          <div className = "row">
            <div className = "image-gallery">
              <h1>#VizcomChallenge</h1>
            </div>
          </div>
          <Row gutter={[8, 8] } className = "gallery">
              <Col span={8} > <img src = "https://via.placeholder.com/550"/> </Col>
              <Col span={8} >  <img src = "https://via.placeholder.com/550"/> </Col>
              <Col span={8} > <img src = "https://via.placeholder.com/550"/> </Col>
              <Col span={8} > <img src = "https://via.placeholder.com/550"/> </Col>
              <Col span={8} > <img src = "https://via.placeholder.com/550"/> </Col>
              <Col span={8} > <img src = "https://via.placeholder.com/550"/> </Col>
          </Row>
          
         
    
        
          <div className = "footer-box row">
            <div className = "col s6 m6 l6">
              <h1>
                On a mission to build the next generation 
                of creative tools
              </h1>
            </div>
            <div className = "col s6 m6 l6">
            <img src = "https://via.placeholder.com/550"/>
            </div>
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
