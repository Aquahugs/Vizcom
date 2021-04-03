import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";

const LightFooter = ({ darkmode }) => {
 
    return (
      <div className="row footer-items lightlist">
        <div className="col s12 m12 l12 info">
          <ul>
            <Link to="/about">
              <li>About</li>
            </Link>
            <a href="https://twitter.com/Vizcom_io">
              <li>Twitter</li>
            </a>
            <a href="https://www.instagram.com/vizcom.io/">
              <li>Instagram</li>
            </a>
          </ul>
        </div>
      </div>
    );

};

export default LightFooter;
