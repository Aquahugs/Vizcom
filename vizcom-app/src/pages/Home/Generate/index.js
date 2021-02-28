import React, { useState, Component } from "react";
import { CollectionThunks } from "../../Profile/Collection/redux";
import { fadeInUp } from "react-animations";
import Popup from "reactjs-popup";
import Radium, { StyleRoot } from "radium";
import BucketList from "./bucket-list";
import AddButtons from "./add-buttons";
import { connect } from "react-redux";
import "reactjs-popup/dist/index.css";
import "./generate.scss";
<<<<<<< HEAD
=======
import downloadbutton from "../../../assets/download-button.svg";
import collectbutton from "../../../assets/collect-button.svg";
>>>>>>> fe4315ba4fb3d642ef9821b666fab0824457add8

class Generate extends Component {
  constructor(props) {
    super(props);
<<<<<<< HEAD
=======
    this.toggleBuckets = this.toggleBuckets.bind(this);
>>>>>>> fe4315ba4fb3d642ef9821b666fab0824457add8
    this.state = {
      mode: "cardesign",
      collectedimage: "",
      userphotos: [],
      isLoaded: false,
      index: 0,
      index1: 1050,
      index2: 200,
      isGenerating: false,
      imageDownload: "",
      bucketSearch: false,
    };
  }

  componentDidMount() {
    document.addEventListener("scroll", this.trackScrolling);
    fetch("https://designerspendroplet.getdpsvapi.com/Generate")
      .then((res1) => res1.json())
      .then((data1) =>
        this.setState({
          isLoaded: true,
          userphotos: data1,
        })
      );
    console.log(this.props.user.authUser.uid);
  }

  toggleImage = () => {
    this.setState({ isGenerating: true });
    this.setState({ index: this.state.index + 3 });
    this.setState({ index1: this.state.index1 + 8 });
    this.setState({ index2: this.state.index2 + 7 });
    setTimeout(() => {
      this.setState({ isGenerating: false });
    }, 800);
  };

  toggleActive = () => {
    if (this.state.mode == "cardesign") {
      this.setState({ mode: "footwear" });
    } else {
      this.setState({ mode: "cardesign" });
    }
  };

  toggleBuckets = () => {
    if (this.state.bucketSearch == false) {
      this.setState({ bucketSearch: true });
    } else {
      this.setState({ bucketSearch: false });
    }
    console.log(this.state);
  };

  handleClick(e) {
    if (e) {
      e.preventDefault();
    }
  }

  logDownload = (e) => {
    this.setState({
      imageDownload: this.state.userphotos.data[this.state.index].imageUrl,
    });
    console.log(this.state.userphotos.data[this.state.index].imageUrl);
  };
  collectImage = (e) => {
    const imageObj = {
      uuid: this.props.user.authUser.uid,
      generated_image_id: this.state.userphotos.data[this.state.index].Id,
      user_uploaded_image_id: null,
      image_uri: this.state.userphotos.data[this.state.index].imageUrl,
    };
    this.props.collectImage(imageObj);
  };

  render() {
    console.log(this.state);
    const { isLoaded, items } = this.state;
    const visibilityStyle = {
      visibility: this.state.isGenerating ? "hidden" : "visible",
      display: this.state.isGenerating ? "none" : "block",
    };
    const hiddenStyle = {
      visibility: this.state.isGenerating ? "visible" : "hidden",
      display: this.state.isGenerating ? "block" : "none",
      marginLeft: "auto",
      marginRight: "auto",
      width: "40%",
    };
    const showBuckets = {
      visibility: this.state.bucketSearch ? "visible" : "hidden",
      display: this.state.bucketSearch ? "block" : "none",
    };
    const hideBuckets = {
      visibility: this.state.bucketSearch ? "hidden" : "visible",
      display: this.state.bucketSearch ? "none" : "block",
    };

    const footActive = {
      backgroundColor: this.state.mode == "footwear" ? "#D9D9D9" : "white",
    };
    const carActive = {
      backgroundColor: this.state.mode == "cardesign" ? "#D9D9D9" : "white",
    };

    const styles = {
      fadeInUp: {
        animation: "x 1.2s",
        animationName: Radium.keyframes(fadeInUp, "fadeInUp"),
      },
    };

    if (!isLoaded) {
      return (
        <div>
          <h1>Loading...</h1>
        </div>
      );
    }

    return (
      <div className="row generate-container">
        <div className=" selector-container">
          <button
            onClick={this.toggleActive}
            style={carActive}
            class=" btn btn-flat "
          >
            car-design
          </button>
          <button
            onClick={this.toggleActive}
            style={footActive}
            class="btn btn-flat"
          >
            footwear
          </button>
        </div>

        <div className="row tag">
          <p>
            Every click uses artificial intelligence to generate unique images{" "}
          </p>
        </div>

        {/* Generated Images later need to compontize these*/}
        <StyleRoot>
          <div className="row generated-container" style={styles.fadeInUp}>
            <div style={visibilityStyle}>
              <div className="col s4 m4 l4">
                <Popup
                  trigger={
                    <img
                      className="generated-image"
                      src={
                        this.state.userphotos.data[this.state.index].imageUrl
                      }
                      style={visibilityStyle}
                    />
                  }
                  modal
                >
                  {/* Pop up module */}
                  <span>
                    <div className="row">
                      <div className="col s7 m7 l7">
                        <img
                          className="generated-imagemodal"
                          src={
                            this.state.userphotos.data[this.state.index]
                              .imageUrl
                          }
                          style={visibilityStyle}
                        />
                      </div>
                      <div className="col s5 m5 l5 generated-info">
                        <h1>
                          {" "}
                          {this.state.userphotos.data[
                            this.state.index
                          ].imageUrl.slice(-22, -1)}
                          g
                        </h1>
                        <h2>collectors</h2>
                        <div className="button-container row">
                          <div style={hideBuckets}>
                            <AddButtons toggleBuckets={this.toggleBuckets} />
                          </div>
                          <div
                            className="bucket-container col s12 m12 l12"
                            style={showBuckets}
                          >
                            <BucketList toggleBuckets={this.toggleBuckets} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </span>
                </Popup>

                {/* Download image in current index later need to compontize this*/}
                <div className="row save-buttons">
                  <a
                    href={this.state.userphotos.data[this.state.index].imageUrl}
                    download
                  >
                    <img
                      className="download-button"
                      src={downloadbutton}
                      onClick={this.logDownload}
                    />
                  </a>
                  <a className="colelct" onClick={this.collectImage}>
                    Collect
                    <i className="material-icons right">add_box</i>
                  </a>
                  {/* <a className ="colelct-confirm" >Added  
              <i class="material-icons right">check</i>
            </a> */}
                </div>
              </div>
              <div className="col s4 m4 l4">
                <img
                  className="generated-image"
                  src={this.state.userphotos.data[this.state.index1].imageUrl}
                  style={visibilityStyle}
                />
                <div className="row">
                  <img className="download-button" src={downloadbutton} />
                </div>
              </div>

              <div className="col s4 m4 l4">
                <img
                  className="generated-image"
                  src={this.state.userphotos.data[this.state.index2].imageUrl}
                  style={visibilityStyle}
                />
                <div className="row">
                  <img className="download-button" src={downloadbutton} />
                </div>
              </div>
            </div>
            <img //LOAD ANIMATION
              src="https://firebasestorage.googleapis.com/v0/b/designerspen-95f24.appspot.com/o/New%20LoadingGenereate%20.gif?alt=media&token=93ba0e96-24af-43a3-8463-650337660f01"
              style={hiddenStyle}
            />
          </div>

          <div className=" genbtn-container row" style={styles.fadeInUp}>
            <button
              a
              href="#"
              className="btn waves-effect generate-btn lighten-1 z-depth-0"
              onClick={this.toggleImage}
              onMouseDown={this.handleClick}
              onKeyUp={(e) => {
                if (e.keyIdentifier === 13 || e.keyIdentifier === 32) {
                  this.handleClick();
                }
              }}
            >
              Generate
            </button>
          </div>
        </StyleRoot>
      </div>
    );
  }
}
const mapDispatchToProps = {
  collectImage: CollectionThunks.collectImage,
};
const mapStateToProps = (state) => {
  return {
    user: state.session,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Generate);
