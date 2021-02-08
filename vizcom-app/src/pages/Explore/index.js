import React from "react";
import { compose } from "recompose";

import { withAuthorization } from "../../app/auth/session";
import './explore.scss'

const Explore = () => {
  return(
    <div className = "row explore-container">
      <div className = "row selectors">
        <div className = "col s6 m6 l6">
         
          <div className = "row">
            <ul>
            <h1>View</h1>
              <li>All</li>
              <li>Boards</li>
              <li>Collected</li>
            </ul>  
            
          </div>
          
        </div>
        <div className = "col s6 m6 l6">
          <h1>Sort by</h1>
          <div className = "row">
            <ul>
              <li>car-design</li>
              <li>footwear</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

const condition = (authUser) => !!authUser;

export default compose(withAuthorization(condition))(Explore);
