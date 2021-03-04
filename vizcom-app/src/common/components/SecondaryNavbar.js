import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./SecondaryNavbar.scss";
import { withRouter } from 'react-router-dom';

<<<<<<< HEAD
const SecondaryNav = (props) => {
  console.log(props)
  const [view, setView] = useState("");

  const toggleView = (e) => {
    setView(e);
    console.log(view);
  };
 
  return(
    <div className = "nav-container">
=======

const SecondaryNav = ({ user, profile, history }) => {

  console.log(profile)
  console.log(history)
  console.log(history.location)
  return (
    <div className="nav-container">
>>>>>>> f315311d4995d49089f0ef9126c5eaf9b9fb2c93
      <ul>
        <li>
          <Link to="/home">Home <span>{history.location.pathname}</span></Link>
        </li>
        <li>
          <Link to="/profile" onClick={() => toggleView("profile")}>Profile / 

          {view === "profile" && (
            <span style = {{fontWeight:'bold'}}>
              {/* {props.profile.first_name} */}
            </span>
           )}
          
          </Link>
        </li>
        {profile && <h2>{profile.first_name}</h2>}
        <li>
          <Link to="/explore">Explore</Link>
        </li>
      </ul>
    </div>
  );
};

<<<<<<< HEAD
const mapStateToProps = state => {
  return{
    user: state.session,
    profile: state.profile.user

  }
}
=======
const mapStateToProps = (state) => {
  return {
    user: state.session,
    profile: state.profile.user
    
>>>>>>> f315311d4995d49089f0ef9126c5eaf9b9fb2c93

  };
};

export default connect(mapStateToProps)(SecondaryNav);
