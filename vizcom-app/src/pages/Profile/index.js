import React from "react";
import "./profile.scss";

import { compose } from "recompose";

import { withAuthorization } from "../../common/auth/session";

const Profile = () => {
  return (
    <div className="profile-container">
      <div className="row">
        <div className="bio-container col sm6 m6 l6">
          <h2>Bio</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever sinc
          </p>
        </div>
        <div className="view-selector col sm6 m6 l6">
          <h2>View</h2>

          <ul>
            <li>Buckets</li>
            <li>Collection</li>
          </ul>
        </div>
      </div>
      <div className="user-content row">
        <img src="https://via.placeholder.com/300" />
      </div>
    </div>
  );
};

const condition = (authUser) => !!authUser;

export default compose(withAuthorization(condition))(Profile);
