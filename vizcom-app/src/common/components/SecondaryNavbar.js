import React from "react";
import { Link } from "react-router-dom";
import './SecondaryNavbar.scss'

export default function SecondaryNav() {
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