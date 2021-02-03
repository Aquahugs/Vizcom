import React,{ useState,useEffect } from "react";
import './generate.scss';

export default function Generate() {
  const [uuid, setUuid] = useState(null);
  const [uuid, setisLoaded] = useState(true);
  const [userphotos, setisLoaded] = useState(true);

  useEffect(() => {
    // document.addEventListener('scroll', this.trackScrolling);
    const {uuid} = {uuid}
     
        fetch('https://designerspendroplet.getdpsvapi.com/Generate')

     .then((res1) => (res1.json()))
     .then((data1) => setisLoaded(true),)      
    });
  
  const [active, setCount] = useState("cardesign");

  // style={{ visibility: this.state.driverDetails.firstName != undefined? 'visible': 'hidden'}}
  return( 
    <div className = "row generate-container">
      <div className =" selector-container">
        <button 
          onClick={() => setCount("cardesign")}
          class=" btn btn-flat "
          style={{ backgroundColor: active == "cardesign"? '#D9D9D9': 'white'}}>
          car-design
        </button>
        <button 
          onClick={() => setCount("footwear")}
          class=" btn btn-flat "
          style={{ backgroundColor: active == "footwear"? '#D9D9D9': 'white'}}
          class="btn btn-flat">footwear</button>
      </div>
      <div className = "row tag">
          <p>Every click uses artificial intelligence to generate unique images </p>
      </div>
      <div className = "row">
      <img 
        className = 'generated-image'  
        src = {this.state.userphotos.data[this.state.index].imageUrl}
        // style = {{
        //     visibility: this.state.isGenerating ? 'hidden': 'visible',
        //     display: this.state.isGenerating ? 'none': 'block'
        // }}  
      />
      </div>
      <div className = " genbtn-container row">
        <button a href="#" className = 'btn waves-effect generate-btn lighten-1 z-depth-0'>Generate</button>
      </div>
    </div>
    
  );
};

