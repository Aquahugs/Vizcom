import React from "react";
import {useDropzone} from 'react-dropzone';
import StyledDropzone from './Dropzone'
import './sketchtorender.scss'

export default function SketchToRender() {
  
  return (
    <div>
    <div className = "row">
      <div className = "image-container col s6 m6 l6">
        <StyledDropzone />
        
      </div>
      <div className = "image-container col s6 m6 l6">
        <img src = "https://via.placeholder.com/700x500"/>
        
      </div>
     
    </div>
     <div className = "row renderbtn-container">
     
     <button a href="#" className = 'btn waves-effect render-btn lighten-1 z-depth-0'>Render</button>

    </div>
    </div>
    );
}