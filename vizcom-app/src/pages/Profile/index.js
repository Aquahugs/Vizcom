import React, {Component} from "react";
import {connect} from 'react-redux'
import "./profile.scss";
import { compose } from "recompose";
import locationicon from '../../assets/location-icon.svg'
import instaIcon from '../../assets/instagram.png'
import twitterIcon from '../../assets/twitter.png'
import plus from '../../assets/plus.png'
import { withAuthorization } from "../../app/auth/session";

class Profile extends Component {
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
    Promise.all([
      fetch(`https://designerspendroplet.getdpsvapi.com/profileimages/:uuid?uuid=${(uuid)}`, {
      method: "GET",
      headers: {'Content-Type':'application/json'}  
      }),
      fetch(`https://designerspendroplet.getdpsvapi.com/collection/:uuid?uuid=${(uuid)}`, {
          method: "GET",
          headers: {'Content-Type':'application/json'}  
      }),
      fetch(`https://designerspendroplet.getdpsvapi.com/bio/:uuid?uuid=${(uuid)}`, {
          method: "GET",
          headers: {'Content-Type':'application/json'}  
      })
    ])
    .then(([res1, res2,res3]) => Promise.all([res1.json(), res2.json(),res3.json()]))
    .then(([data1,data2,data3]) => this.setState({
      info:data1,
      userCollection:data2,
      bio: data3,
      isLoaded:true,
    }))
    console.log(this.state)
  }

  toggleActive = () => {
    if (this.state.view == 'bucket'){
      this.setState({ view :"collection" });
    }
    else {
      this.setState({ view :'bucket'})
    }
    console.log(this.state)
  }

  render () {
    const {isLoaded} = this.state
    // Conditonal style logic to toggle view properties
    const bucketActive = {
      visibility: this.state.view == 'bucket' ? 'visible': 'hidden',
      display: this.state.view == 'collection' ? 'none': 'inline-block'
    }
    const collectionActive = {
      visibility: this.state.view == "collection"? 'visible': 'hidden',
      display: this.state.view == 'bucket' ? 'none': 'inline-block'
    }

      
    if (!isLoaded)    
    {
      return <div ><h1 >Loading...</h1></div>
    }

    else {
      return (
        <div className="profile-container">
          <div className="row">
            <div className="col sm6 m6 l6">
              <div className = "row bio-header">
              <a href = "http://localhost:3000/editor">
                <button class=" btn btn-flat edit-btn ">
                  Edit profile
                </button>
              </a>
              <h2>{this.state.displayName}</h2>

              </div>

              <div className = "row">
                <div className = "col s6 m6 l6 location-container">
                  <img className = "location-icon" src = {locationicon}/> 
                  <p>Moutainview, California</p>
                </div>
                <div className = "col s6 m6 l6 social-icons">
                  <img src = {instaIcon}/> 
                  <img src = {twitterIcon}/> 
                </div>
              </div>
              
              <p>
                {this.state.bio.data[0].bio}
              </p>
            </div>
            <div className="view-selector col s6 m6 l6">
              <h2>View</h2>
              <ul>
                <a><li onClick={this.toggleActive} >Buckets</li></a>
                <a><li onClick={this.toggleActive}>Collection</li></a>
                <li>All</li>
              </ul>
            </div>
          </div>

          <div className = "row" style = {bucketActive}>
            <a href = "http://localhost:3000/newbucket">
              <button class=" btn btn-flat create-btn ">
                <img src = {plus}/><br/>
                Create new bucket
              </button>
            </a>
          </div>

          {/* Users collection */}
          <div className="row " style = {collectionActive}>
          {this.state.userCollection.data.map(function (n) { 
                return ( //post tags 
                <div className=" collection-container col s3 m3 l3" key={n}>
                    <img className = "collection-image"src={n.post_id}/> 
                </div>  
                );
            })} 
          </div>
      
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return{
    user: state.session
  }
} 

const condition = (authUser) => !!authUser;


export default connect (mapStateToProps)(Profile);
