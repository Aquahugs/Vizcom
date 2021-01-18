import React from "react";
import './primary-navbar.scss'

export default function PrimaryNav() {
  return (
    <div className = "nav">
      <div className = "row">
        <div className = "col s7 m7 l7">
          <img src ="https://via.placeholder.com/50" />
        </div>
        <div className = " bucket col s3 m3 l3">
          <p>new bucket</p>
        </div>
        <div className = "user-icon col s2 m2 l2">
          <p>third col</p>
        </div>
      </div>
    </div>
  );
}