import React, { useEffect } from "react";
import Footer from "../../../common/components/Footer";
import { Link } from "react-router-dom";
import WhiteLogo from "../../../assets/logo-white.png";
import Video from "../Assets/vid.mp4";
import Video2 from "../Assets/vid2.mp4";
import image1 from "../Assets/Group2.png";
import image2 from "../Assets/Group1.png";
import challenge1 from "../Assets/challenge1.jpg";
import challenge2 from "../Assets/challenge2.jpg";
import challenge3 from "../Assets/challenge3.jpg";
import challenge4 from "../Assets/challenge4.jpg";
import challenge5 from "../Assets/challenge5.jpg";
import challenge6 from "../Assets/challenge6.jpg";
import challenge7 from "../Assets/challenge7.jpg";
import challenge8 from "../Assets/challenge8.jpg";
import challenge9 from "../Assets/challenge9.jpg";

import { Button, Card } from "antd";
import { Row } from "antd";
import { Col } from "antd";
import { Carousel } from "3d-react-carousal";

import "antd/dist/antd.css";
import "inter-ui/inter.css";
import "../LandingPage.scss";
import "./mobile.scss";
import FadeIn from "react-fade-in";
import Aos from "aos";
import "aos/dist/aos.css";
const MobileView = () => {
  useEffect(() => {
    Aos.init({
      duration: 3000,
      delay: 200,
    });
  }, []);

  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  let slides = [
    <Card style={{ width: 600 }} className="quote-card">
      <img src="https://mir-s3-cdn-cf.behance.net/user/276/2e8ceb4795979.5c6fb23a37265.jpg" />
      <p>
        Giacomo Castelli
        <br />
        <span className="sub-text">
          Exterior Car Designer @ Great Wall Motors
        </span>
      </p>
      <p>
        An interesting tool that will shape a transportation designer’s job in
        the near future : Selecting the AI's ideas and refining them.
        Interesting...{" "}
      </p>
    </Card>,
    <Card style={{ width: 600 }} className="quote-card">
      <img src="https://mir-s3-cdn-cf.behance.net/user/276/55f7aa51447897.581365c54ed9f.jpeg" />
      <p>
        SangYeon Kim
        <br />
        <span className="sub-text">Art Center Design Student</span>
      </p>
      <p>
        {" "}
        I can see how using AI as a creative assistant will be a new to way
        create new aesthetics, and it will be our job to help it find out what
        this new aesthetic is.
      </p>
    </Card>,
    <Card style={{ width: 600 }} className="quote-card">
      <img src="https://lh5.googleusercontent.com/-AjMa_uy1NrsaE69M3ckXsWOPOqC1sYBHuju_sx4o0m58RoyQ_JwxAuFLWQp2udJTDZlTR9Z4ROSGrwUaVhtxiHB2i_G5PD9YbA9r1VoH0kKth-XlJlhlqcGQfcWVKJzH1aNxaLeMBg=s0" />
      <p>
        Scott Guan
        <br />
        <span className="sub-text">Creative Designer @ Ford</span>
      </p>
      <p>
        For me personally I would prefer to work with a base image, which Vizcom
        is able to provide, compared with starting with a blank canvas.
      </p>
    </Card>,
  ];

  return (
    <div className="content-container2">
      <FadeIn delay={300}>
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
            {" "}
            <p>Log in</p>
          </Link>
        </div>
      </FadeIn>

      <div className="row">
        <div data-aos="fade-up" className="col s12 m12 l12 landing-banner">
          <FadeIn delay={500}>
            <div className="intro-container">
              <h1>
                We're reimagining the way artist and designers
                <span className="gradient-create"> create.</span>
              </h1>
              <p>
                {" "}
                Ai enabled creative tools that shorten the distance between
                having an idea and bringing it to life.
              </p>
              <div className="row intro-btn-container-tablet">
                <div className="col s6 m6 l6">
                  <Link to="/signin">
                    <Button className="get-started" type="primary">
                      Get Started
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
      <FadeIn delay={800}>
        <div className="demo-video">
          <video
            muted
            loop
            autostart="true"
            playsInline
            autoPlay
            src={Video}
            type="video/mp4"
          />
        </div>
      </FadeIn>
      <div data-aos="fade-up" className="row sk2r-demo">
        <FadeIn delay={800}>
          <div className="col s12 m12 l12">
            <h1>Sketch to Render</h1>
            <p>Hours of manual work becomes seconds of compute.</p>
          </div>
          <div className="col s12 m12 l12">
            <div className="demo-video ">
              <video
                muted
                loop
                autostart="true"
                playsInline
                autoPlay
                src={Video2}
                type="video/mp4"
              />
            </div>
          </div>
          <div className="col s12 m12 l12">
            <Link to="/signin">
              <Button className="get-started-try  hvr-shrink" type="primary">
                Get Started
              </Button>
            </Link>
          </div>
        </FadeIn>
      </div>

      <div data-aos="fade-up" className="row quote">
        <h1>Inspired by artist</h1>
        <h2>Built for the future</h2>
        <Carousel slides={slides} autoplay={true} interval={5000} />
      </div>

      <div data-aos="fade-up" className="row quote2">
        <h2>
          Machines that assist humans in
          <br />
          <span className="creative-thinking">creative thinking.</span>
        </h2>
        <img src={image1} />
      </div>
      <div className="row">
        <div className="image-gallery">
          <h1>#VizcomChallenge</h1>
        </div>
      </div>
      <Row data-aos="fade-up" gutter={[8, 8]} className="gallery">
        <Col span={8}>
          {" "}
          <a href="https://www.instagram.com/p/CLdNtVspSgX/" target="_blank">
            <img src={challenge1} />
          </a>{" "}
        </Col>
        <Col span={8}>
          {" "}
          <a href="https://www.instagram.com/p/CPVutyPD67j/" target="_blank">
            <img src={challenge2} />{" "}
          </a>
        </Col>
        <Col span={8}>
          {" "}
          <a href="https://www.instagram.com/p/CMHozlKHIZc/" target="_blank">
            <img src={challenge3} />
          </a>
        </Col>
        <Col span={8}>
          {" "}
          <a href="https://www.instagram.com/p/CNc6RIHpRok/" target="_blank">
            <img src={challenge4} />
          </a>
        </Col>
        <Col span={8}>
          {" "}
          <a href="https://www.instagram.com/p/CHLJZkipaoC/" target="_blank">
            <img src={challenge5} />
          </a>
        </Col>
        <Col span={8}>
          {" "}
          <a href="https://www.instagram.com/p/CFZoVjuJ-4G/" target="_blank">
            <img src={challenge6} />
          </a>
        </Col>
        <Col span={8}>
          {" "}
          <a href="https://www.instagram.com/p/CHhoKkOJI2Y/" target="_blank">
            <img src={challenge7} />
          </a>
        </Col>
        <Col span={8}>
          {" "}
          <a
            href="https://twitter.com/Vizcom_co/status/1384746699827007492"
            target="_blank"
          >
            <img src={challenge8} />
          </a>
        </Col>
        <Col span={8}>
          {" "}
          <a href="https://www.instagram.com/p/CMK5J-QFCVx/" target="_blank">
            <img src={challenge9} />
          </a>
        </Col>
      </Row>

      <div className="footer-box row">
        <div data-aos="fade-right" className="col s12 m12 l12">
          <h1>On a mission to build the next generation of creative tools.</h1>
        </div>
        <div data-aos="fade-left" className="col s12 m12 l12">
          <img src={image2} />
        </div>
      </div>
      <div style={{ backgroundColor: "#256AFE" }}>
        <Footer />
      </div>
    </div>
  );
};

export default MobileView;
