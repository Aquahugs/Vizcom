import React from "react";
import { Link } from "react-router-dom";

export default function ToolBar(props) {
    console.log(props);
    return(
        <Link to={props.link}>
            <div class="col s4 m4">
                <div class="card">
                    <div class="card-image">
                        <img src={props.logo}/>
                    </div>
                    <div className = "content-container">
                    <div class="card-content">
                        <h2>
                            {props.name}  
                        </h2>
                        <p>{props.description}</p>
                    </div>
                    </div>
                
                </div>
            </div>
        </Link>
    )
}