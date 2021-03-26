import React from "react";
import './Footer.scss';



export default function Footer() {
  return (
  <div className = 'row footer-items'>
    <div className = 'col s12 m12 l12 info'>
      <ul>
        <li>About</li>
        <li>Contact</li>
        <a href = "https://twitter.com/Vizcom_io"><li>Twitter</li></a>
        <a href = "https://www.instagram.com/vizcom.io/"><li>Instagram</li></a>
      </ul>
    </div>
  </div>
  );
}