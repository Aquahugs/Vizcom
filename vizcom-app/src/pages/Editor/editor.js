import React, {Component} from "react";
import {connect} from 'react-redux'
import "./profile.scss";
import { compose } from "recompose";


class Editor extends Component {
  constructor(props){
    super(props);
    this.state= {  
      images :[],
      photoURL:props.user.authUser.providerData[0].photoURL,
      displayName:props.user.authUser.providerData[0].displayName,
      uuid: props.user.authUser.uid,
      isLoaded:false,
      isLoggedIn: props.user.authUser.uid,
      isMe:false,
      isEdit:false,
      isEditBio:false,
      info:[],
      selectedFile: [],
      userCollection:[],
      bio:null,
      newbio:null,
      view:'bucket'
    }
  }
  
  componentDidMount() {
    const {uuid} = this.state
   
  }

  

  render () {
   

      
    

      return (
        <div>
            <h1>editor component</h1>
        </div>
      );
    }
  }


const mapStateToProps = state => {
  return{
    user: state.session
  }
} 

const condition = (authUser) => !!authUser;


export default connect (mapStateToProps)(Editor);
