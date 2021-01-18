import React from "react";
import { Link } from "react-router-dom";
import './secondary-navbar.scss'
  

export default function SecondaryNav() {
  return(
    <div className = "nav-container">
        <ul>
            <li>
            <Link to="/">Vizcom</Link>
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