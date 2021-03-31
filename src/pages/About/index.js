import React from "react";
import { compose } from "recompose";
import "./about.scss";
import { withAuthorization } from "../../router/auth/session";
import demovideo from "../../assets/SK2RDEMO.mp4";
import demovideo2 from "../../assets/aboutgan.mp4";
import artfields from "../../assets/artfields.png";
import cardesign from "../../assets/cardesign.png";
import { Desktop, Tablet, Mobile, Phone } from "./responsive";
import TabletView from "./tablet";
const About = () => {
  return (
    <div>
      <Desktop>
        <div className="about-container">
          <div className="row title-banner">
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
          <div className="row exp">
            <div className="col s8 m8 l8">
              <h1>Car Design</h1>
              <p>
                The car design process always begins with an idea, which gives
                rise to a drawing. On a sketch pad or a computer screen, ideas
                which previously only existed in the designer’s head become
                visible.
              </p>
              <img alt="cardesign" src={cardesign} />
            </div>
          </div>
          <div className="row exp inspo">
            <div className="col s4 m4 l4"></div>
            <div className="col s8 m8 l8">
              <h1>
                We started experimenting with what was possible with GANs{" "}
              </h1>
              <p>
                Instantly we started to see how GANs could be a creative
                assistant for car designers to explore millions of generated
                ideation sketches during the early 2-D phase of car design.
              </p>
              <video
                className="sk2r-video"
                style={{
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

          <div className="row exp2 insta-box"></div>

          <div className="row sk2r">
            <div className="col s8 m8 l8">
              <h1>So we kept building</h1>
              <p>
                Car designers also use markers, pastels, pencils and other
                manual drawing tools to help communicate their 2D line drawings.
                We saw this as an opportunity to apply machine learning to help
                accelerate this process by providing an automatic digital
                rendering tool.
              </p>
            </div>
            <div className="row">
              <video
                className="sk2r-video"
                style={{ width: "70%", height: "auto" }}
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
            <div className="col s12 m12 l5">
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
              <img alt="artfields" src={artfields} />
            </div>
          </div>
          <div className="row">
            <div className="col s12 m12 l12 mission">
              <h1>Our vision is to</h1>
              <h2>Build tools that accelerate creative thinking.</h2>
            </div>
          </div>
        </div>
      </Desktop>
      <Tablet>
        <TabletView />
      </Tablet>
      <Mobile>
        <h1>Mobile</h1>
      </Mobile>
    </div>
  );
};

const condition = (authUser) => !!authUser;

export default compose(About);
