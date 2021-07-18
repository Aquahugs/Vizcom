import React from "react";
import { Link } from "react-router-dom";
import "./Card.scss";
import { Desktop, Tablet, Mobile } from "../Responsive/Responsive";

const Card = ({ link, logo, name, description, user }) => {
  return (
    <div>
      <Desktop>
        <Link to={link}>
          <div className="col s4 m4 l4">
            <div className="card">
              <div className="card-image">
                <img alt="logo" src={logo} />
              </div>
              <div className="content-container">
                <div className="card-content">
                  <h2>{name}</h2>
                  <p style={{ paddingBottom: "5%" }}>{description}</p>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </Desktop>
      <Tablet>
        <Link to={link}>
          <div className="col s6 m6">
            <div
              className="card"
              style={{ opacity: name !== "Sketch2Render" ? 1 : 0.5 }}
            >
              <div className="card-image">
                <img alt="logo" src={logo} />
              </div>
              <div className="content-container">
                <div className="card-content">
                  <h2>{name}</h2>
                  <p>{description}</p>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </Tablet>
      <Mobile>
        <Link to={link}>
          <div className="col s=12 m12">
            <div
              className="card"
              style={{ opacity: name !== "Sketch2Render" ? 1 : 0.5 }}
            >
              <div className="card-image">
                <img alt="logo" src={logo} />
              </div>
              <div className="content-container">
                <div className="card-content">
                  <h2>{name}</h2>
                  <p>{description}</p>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </Mobile>
    </div>
  );
};

export default Card;
