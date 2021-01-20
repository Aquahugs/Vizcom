import React from "react";
import './primary-navbar.scss'
import Logo from '../../assets/logo.png'
import NewBucket from '../../assets/create-bucket.svg'

export default function PrimaryNav() {
  return (

    <nav>
      <div class="nav-wrapper">
        <a href="#" class="logo-container"><img src ={Logo} /></a>
        <ul className ="nav-items" class="right hide-on-med-and-down">
          <li >
            <a 
              style = {{color:'#505050',fontSize:'20px'}} 
              href="">
              new bucket
            </a>
          </li>
          <li>
            <a 
            style = {{color:'#505050',fontSize:'20px'}} 
            href="">
              user profile
            </a>
          </li>
          <li>
            <a href="collapsible.html">
              <img src = "https://via.placeholder.com/30"/>
            </a>
          </li>
        </ul>
      </div>
    </nav>
    // <div className = "nav">
    //   <div className = "row">
    //     <div className = "col s7 m7 l7 logo-container">
    //       <img src ={Logo} />
    //     </div>
    //     <div className = " bucket col s3 m3 l3">
    //       <ul>
    //         <li>
    //           <p>new bucket</p>
    //         </li>
    //         <li>
    //           <img src = {NewBucket}/>
    //         </li>
    //       </ul>
          
    //     </div>
    //     <div className = "user-icon col s2 m2 l2">
    //       <ul>
    //         <li>
    //           Username
    //         </li>
    //         <li>
    //         <img src = "https://via.placeholder.com/30"/>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </div>
  );
}