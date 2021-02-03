import React,{ useState,Component } from "react";
import './generate.scss';


class Generate extends Component {
  constructor(props){
        
    super(props);
    this.state= {
        mode:"cardesign",
        items :[],
        users:[],
        collectedimage:'',
        // uuid: this.props.auth.uid,
        // displayName: props.auth.displayName,
        // userPhotoUrl: props.auth.photoURL,
        userphotos:[],
        id:[],
        isLoaded: false,
        selectedImage:'',
        limit:50,
        GeneratePreview:'',
        index: 0,
        index1: 1050,
        index2: 200,
        isLoggedIn:false,
        setIsOpen:true,
        modalIsOpen:true,
        isGenerating:false,
        imageDownload:''
        
    }

}
  componentDidMount() {
    document.addEventListener('scroll', this.trackScrolling);
    const {uuid} = this.state
     
      fetch('https://designerspendroplet.getdpsvapi.com/Generate')

     .then((res1) => (res1.json()))
     .then((data1) => this.setState({
        isLoaded:true,
        userphotos:data1
     }))      
}

toggleImage = () => {
  this.setState({ isGenerating :true });
  this.setState({ index : this.state.index + 3 });
  this.setState({ index1 : this.state.index1 + 8 });
  this.setState({ index2 : this.state.index2 + 7 });
  setTimeout(() => {
      this.setState({ isGenerating :false });
  }, 800);
}
toggleActive = () => {
  if (this.state.mode == 'cardesign'){
    this.setState({ mode :"footwear" });
  }
  else {
    this.setState({ mode :"cardesign" })
  }
  
}
handleClick(e) { if (e) {e.preventDefault()}; }

  render(){
  console.log(this.state)
  const { isLoaded,items} = this.state;
  const visibilityStyle = {
    visibility: this.state.isGenerating ? 'hidden': 'visible',
    display: this.state.isGenerating ? 'none': 'block'
  }
  const hiddenStyle = {
    visibility: this.state.isGenerating ? 'visible': 'hidden',
    display: this.state.isGenerating ? 'block': 'none',

    marginLeft: 'auto',
    marginRight: 'auto',
    width: '40%'
  }
  const footActive = {
    backgroundColor: this.state.mode == "footwear"? '#D9D9D9': 'white'
  }
  const carActive = {
     backgroundColor: this.state.mode == "cardesign"? '#D9D9D9': 'white'
  }

 
  if (!isLoaded) {
    return <div ><h1 >Loading...</h1></div>
  }
    
  return( 
    <div className = "row generate-container">
      <div className =" selector-container">
        <button 
          onClick={this.toggleActive}
          style = {carActive}
          class=" btn btn-flat "
          >
          car-design
        </button>
        <button 
          onClick={this.toggleActive}
          class=" btn btn-flat "
          style = {footActive}
          class="btn btn-flat">footwear</button>
      </div>
      <div className = "row tag">
          <p>Every click uses artificial intelligence to generate unique images </p>
      </div>
      <div className = 'row generated-container'>
        <div className = "col s4 m4 l4">
          <img 
            className = 'generated-image'  
            src = {this.state.userphotos.data[this.state.index].imageUrl}
            style = {visibilityStyle}
          />
        </div>
        <div className = "col s4 m4 l4">
          <img 
            className = 'generated-image'  
            src = {this.state.userphotos.data[this.state.index1].imageUrl}
            style = {visibilityStyle}
          />
        </div>
        
        <div className = "col s4 m4 l4">
          <img 
            className = 'generated-image'  
            src = {this.state.userphotos.data[this.state.index2].imageUrl}
            style = {visibilityStyle}
          />
        </div>
        <img //LOAD ANIMATION
          src = 'https://firebasestorage.googleapis.com/v0/b/designerspen-95f24.appspot.com/o/New%20LoadingGenereate%20.gif?alt=media&token=93ba0e96-24af-43a3-8463-650337660f01'
          style ={hiddenStyle}
        />
      </div>
      
      <div className = " genbtn-container row">
        <button 
        a href="#" 
        className = 'btn waves-effect generate-btn lighten-1 z-depth-0'
        onClick={this.toggleImage} onMouseDown={this.handleClick} 
        onKeyUp={(e) => {if (e.keyIdentifier  === 13 || e.keyIdentifier  === 32) {this.handleClick()}}}
        >Generate</button>
      </div>
    </div>
    
  );
  }
}

export default  (Generate);