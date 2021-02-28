import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {connect} from 'react-redux';
import './SecondaryNavbar.scss'

const SecondaryNav = (props) => {
  console.log(props)
  const [view, setView] = useState("");

  const toggleView = (e) => {
    setView(e);
    console.log(view);
  };
 
  return(
    <div className = "nav-container">
      <ul>
        <li>
          <Link to="/home">Home</Link>
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
        <li>
          <Link to="/explore">Explore</Link>
        </li>
      </ul>
    </div>
  )
};

const mapStateToProps = state => {
  return{
    user: state.session,
    profile: state.profile.user

  }
}


export default connect (mapStateToProps)(SecondaryNav);