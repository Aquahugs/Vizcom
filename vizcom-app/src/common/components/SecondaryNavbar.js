import React from "react";
import { Link } from "react-router-dom";
import {connect} from 'react-redux';
import './SecondaryNavbar.scss'

const SecondaryNav = (props) => {
  console.log(props)
  console.log(props.user.authUser.firstName)
  return(
    <div className = "nav-container">
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
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
    user: state.sessionState
  }
}

export default connect (mapStateToProps)(SecondaryNav);