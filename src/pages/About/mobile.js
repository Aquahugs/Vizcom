import React from "react";
import { compose } from "recompose";
import "./about-mobile.scss";
import { withAuthorization } from "../../router/auth/session";
import demovideo from "../../assets/SK2RDEMO.mp4";
import demovideo2 from "../../assets/aboutgan.mp4";
import artfields from "../../assets/artfields.png";
import cardesign from "../../assets/cardesign.png";

const MobileView = () => {
  return (
    <div>
      <div className="about-container-mobile">
        <div className="row title-banner-mobile">
          <h1>
            Ai Creative tools, <br />
            helping bring ideas to life.{" "}
          </h1>
          <p>
            In 2020 we began to explore the possibilities of <br />
            how man and machine can work together as a <br />
            team for creative thinking.
          </p>
        </div>
        <div className="row exp-mobile">
          <div className="col s12 m12 l12">
            <h1>Car Design</h1>
            <p>
              The car design process always begins with an idea, which gives
              rise to a drawing. On a sketch pad or a computer screen, ideas
              which previously only existed in the designer’s head become
              visible.
            </p>
            <img src={cardesign} />
          </div>
        </div>
        <div className="row exp-mobile inspo">
          <div className="col s3 m3 l3"></div>
          <div className="col s9 m9 l9">
            <h1>We started experimenting with what was possible with GANs </h1>
            <p>
              Instantly we started to see how GANs could be a creative assistant
              for car designers to explore millions of generated ideation
              sketches during the early 2-D phase of car design.
            </p>
            <video
              className="sk2r-video"
              style={{
                maxWidth: "100%",
                height: "auto",
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
              }}
              muted
              loop
              autostart
              autoPlay
              src={demovideo2}
              type="video/mp4"
            />
          </div>
        </div>

        <div className="row exp2 insta-box-mobile"></div>

        <div className="row sk2r-mobile">
          <div className="col s12 m12 l12">
            <h1>So we kept building</h1>
            <p>
              We saw this as an opportunity to apply machine learning to help
              further accelerate this process by providing an automatic digital
              rendering tool.
            </p>
          </div>
          <div className="row">
            <video
              className="sk2r-video-mobile"
              style={{ width: "100%", height: "auto" }}
              muted
              loop
              autostart
              autoPlay
              src={demovideo}
              type="video/mp4"
            />
          </div>
        </div>
        <div className="row final">
          <div className="col s5 m5 l5">
            <h1>But, it dosen't stop there</h1>
            <ul>
              <li>Concept Art</li>
              <li>Enviorment Artist</li>
              <li>Character Design</li>
              <li>Illustration</li>
              <li>Footwear</li>
              <li>Industrial Design</li>
            </ul>
          </div>
          <div className="col s7 m7 l7">
            <img src={artfields} />
          </div>
        </div>
        <div className="row">
          <div className="col s12 m12 l12 mission">
            <h1>Our vision is to</h1>
            <h2>Build tools that accelerate creative thinking.</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

const condition = (authUser) => !!authUser;

export default compose(MobileView);