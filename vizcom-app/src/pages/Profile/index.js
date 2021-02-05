import React from "react";
import {connect} from 'react-redux'
import "./profile.scss";
import { compose } from "recompose";

import { withAuthorization } from "../../app/auth/session";

const Profile = (props) => {
  console.log(props)
  return (
    <div className="profile-container">
      <div className="row">
        <div className="bio-container col sm6 m6 l6">
          <h2>Bio</h2>
          <h1>{props.user.authUser.firstName}</h1>
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
            <li>All</li>
          </ul>
        </div>
      </div>
      <div className="user-content row">
        <img src="https://via.placeholder.com/300" />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return{
    user: state.sessionState
  }
} 

// const mapDispatchToProp = dispatch => {
//   return {
//     sessionState: () => sessionReducer(authUser())
//   }
// }

const condition = (authUser) => !!authUser;

<<<<<<< HEAD
export default connect (mapStateToProps)(Profile);
=======
export default compose(withAuthorization(condition))(Profile);
>>>>>>> e1bd23b22b0e4ee7c4fcbb0ea5cdefbf62c976cc
