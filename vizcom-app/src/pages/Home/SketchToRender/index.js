import React from "react";
import StyledDropzone from './Dropzone'
import './sketchtorender.scss'
import demovideo from '../../../assets/SK2RDEMO.mp4'


export default function SketchToRender() {
  return (
    <div>
      <h1 className = 'title'>SketchToRender</h1>
      <p className = 'subtitle'>Instantly render your sketches automatically. Coming soon...</p>
    <video 
    style = {
      {width:'80%',
      height:'720px',
      display: 'block',
      marginLeft: 'auto',
      marginRight: 'auto'
    }} 
    muted loop autostart autoPlay src={demovideo} type="video/mp4" />

    {/* <div className = "row">
      <div className = "image-container col s6 m6 l6">
        <StyledDropzone />
      </div>
      <div className = "image-container col s6 m6 l6">
        <img src = "https://via.placeholder.com/700x500"/>
        
      </div>
     
    </div>
     <div className = "row renderbtn-container">
     
     <button a href="#" className = 'btn waves-effect render-btn lighten-1 z-depth-0'>Render</button>

    </div> */}

    <p className = 'title2'>Recive early access updates</p>
    <form >
        <input   style = {{
          width:'80%',
          display: 'block',
          marginLeft: 'auto',
          marginRight: 'auto'
    }}   type ='email' id='email' placeholder="Youremail@email.com" className = 'input-field' />
        <button className = ' updatesbtn2 lighten-1 z-depth-0'>Sign up </button>
    </form>
    </div>
    );
}