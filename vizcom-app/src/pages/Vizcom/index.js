
import Generate from "./Generate";
import SketchToRender from "./SketchToRender";
import './vizcom.scss'
import React from "react";
import {
  Routes,
  Route,
  Link,
} from "react-router-dom";
import GenerateLogo from'../../assets/generate-logo.png';
import SrLogo from'../../assets/s2r.png';


export default function Vizcom() {

return (
    <div className = "tools">
        <div className = "tools-header">
            <h1>Tools</h1>
        </div>
        <div className = "nav row">
            <Link to="generate">
                <div class="col s4 m4">
                <div class="card">
                    <div class="card-image">
                        <img src={GenerateLogo}/>
                    </div>
                    <div className = "content-container">
                    <div class="card-content">
                        <h2>
                          Generate  
                        </h2>
                        <p>Explore uniquely ai generated  generated inspiration ….</p>
                    </div>
                    </div>
                  
                </div>
                </div>
            </Link>

            <Link to="sketch-to-render">
                <div class="col s4 m4">
                <div class="card">
                    <div class="card-image">
                    <img src={SrLogo}/>
                    </div>
                    <div className = "content-container">
                        <div class="card-content">
                            <h2>
                            Sketch2Render  
                            </h2>
                            <p>Auto fill base values for all of your line drawings</p>
                        </div>
                    </div>
                </div>
                </div>
            </Link>
        </div>


     
    </div>
);
}