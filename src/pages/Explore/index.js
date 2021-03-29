import React from "react";
import { compose } from "recompose";
import './explore.scss'
import { withAuthorization } from "../../router/auth/session";

const Explore = () => {
  return (
    <div className="explore-container">
      <div className="row selectors">
        <div className="col s6 m6 l6">
          <div className="row">
            <ul>
              <h1>View</h1>
              <li>All</li>
              <li>Boards</li>
              <li>Collected</li>
            </ul>
          </div>
        </div>
        <div className="col s6 m6 l6">
          <h1>Sort by</h1>
          <div className="row">
            <ul>
              <li>car-design</li>
              <li>footwear</li>
            </ul>
          </div>
        </div>
      </div>

      <div className = "row">
        <div className = "col s2 m2 l2">
          <img src = "https://via.placeholder.com/150"/>  
        </div>
      </div>
    </div>
  );
};

const condition = (authUser) => !!authUser;

export default compose(withAuthorization(condition))(Explore);