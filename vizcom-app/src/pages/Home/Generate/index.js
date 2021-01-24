import React,{ useState } from "react";
import './generate.scss';

export default function Generate() {
  
  const [count, setCount] = useState(false);

  // style={{ visibility: this.state.driverDetails.firstName != undefined? 'visible': 'hidden'}}
  return( 
    <div className = "row generate-container">
      <div className =" selector-container">
        <button 
         onClick={() => setCount(true)}
        class=" btn btn-flat "
        style={{ backgroundColor: count != true? 'white': ' #D9D9D9'}}>
          car-design
          </button>
        <button 
        onClick={() => setCount(false)}
        class=" btn btn-flat "
        style={{ backgroundColor: count != false? 'white': ' #D9D9D9'}}
        class="btn btn-flat">footwear</button>
      </div>
      <div className = "row tag">
          <p>Every click uses artificial intelligence to generate unique images </p>
      </div>
      <div className = "row">
        <img src = "https://via.placeholder.com/450"/>
        <img src = "https://via.placeholder.com/450"/>
        <img src = "https://via.placeholder.com/450"/>
      </div>
      <div className = " genbtn-container row">
        <button a href="#" className = 'btn waves-effect generate-btn lighten-1 z-depth-0'>Generate</button>
      </div>
    </div>
    
  );
}

