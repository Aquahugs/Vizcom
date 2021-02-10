import React, {Component} from "react";
import {connect} from 'react-redux'
import "./editor.scss";
import M from "materialize-css";
import { compose } from "recompose";
import twitterIcon from '../../assets/twitter.png'
import instaIcon from '../../assets/instagram.png'
import webIcon from '../../assets/website.png'


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
    let input = document.getElementById("textarea2");
    M.CharacterCounter.init(input);
   
  }

  

  render () {
    return (
      <div class="row form-container">
        <form class="col s12">
          <div class="row edit-profile">
            <h1>Edit profile</h1>
            <div class="input-field col s6">
              <input id="first_name" placeholder ={this.state.displayName} type="text" class="validate"/>
              <label for="first_name">First Name</label>
            </div>
            <div class="input-field col s6">
              <input id="last_name" type="text" class="validate"/>
              <label for="last_name">Last Name</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12">
              <input id="location" type="text" class="validate" />
              <label for="location">Location</label>
            </div>
          </div>
          <div class="row">
          <div class="input-field col s12">
            <textarea id="textarea2" class="materialize-textarea" maxLength="150"></textarea>
            <label for="textarea2">Bio</label>
          </div>
        </div>
          <div class = "row socials">
            <ul>
              <h1>Socials</h1>
              <li>
              <div class="input-field col s12">
              <i class="material-icons prefix"><img src = {instaIcon}/></i>
              <input id="instagram" type="text" class="validate"/>
              <label for="instagram">Instagram</label>
            </div>
              </li>
              <li>
              <div class="input-field col s12">
              <i class="material-icons prefix"><img src = {twitterIcon}/></i>
              <input id="instagram" type="text" class="validate"/>
              <label for="instagram">Twitter</label>
            </div>
              </li>
              <li>
              <div class="input-field col s12">
              <i class="material-icons prefix"><img src = {webIcon}/></i>
              <input id="website" type="text" class="validate"/>
              <label for="website">Website</label>
            </div>
              </li>
            </ul>
          </div>

          <div class = "row action-buttons">
          <button class="btn waves-effect waves-light" type="submit" name="action">
            Cancel
          </button>
          <button class="btn waves-effect waves-light" type="submit" name="action">
            Save
          </button>
          </div>
        </form>
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
