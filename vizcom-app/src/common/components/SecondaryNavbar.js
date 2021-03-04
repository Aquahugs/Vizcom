import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./SecondaryNavbar.scss";
import { withRouter } from 'react-router-dom';


const SecondaryNav = ({ user, profile, history }) => {

  console.log(profile)
  console.log(history)
  console.log(history.location)
  return (
    <div className="nav-container">
      <ul>
        <li>
          <Link to="/home">Home <span>{history.location.pathname}</span></Link>
        </li>
        <li>
          <Link to="/profile" >Profile / 

          
          </Link>
        </li>
        <li>
          <Link to="/explore">Explore</Link>
        </li>
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.session,
    profile: state.profile.user
    

  };
};

export default connect(mapStateToProps)(SecondaryNav);
