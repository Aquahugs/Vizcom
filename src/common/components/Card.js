import React from "react";
import { Link } from "react-router-dom";
import "./Card.scss";

const Card = ({ link, logo, name, description,push }) => {
  return (
    <Link to={link}>
      <div className="col s4 m4">
        <div className="card" style = {{ opacity: name != "Sketch2Render"? 1: 0.5}}>
          <div className="card-image">
            <img src={logo} />
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
  );
};

export default Card;