import React, { Component } from "react";
import { connect } from "react-redux";
import "./sketchtorender.scss";
import demovideo from "../../../assets/SK2RDEMO.mp4";

class SketchToRender extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      users: [],
      description: "",
      postTag: "",
      collection: [],
      userphotos: [],
      tags: [],
      bio: [],
      id: [],
      isLoaded: false,
      submitted: true,
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    // event to submit the email data to the api server dawg
    e.preventDefault();
    console.log(e);
    const { email } = this.state;

    let formData = new FormData();
    formData.append("email", email);

    fetch(
      `https://designerspendroplet.getdpsvapi.com/submitemail?email=${email}`
    )
      .then((result) => {
        // access results...
        console.log(result);
      })
      .then(() => {});
  };
  render() {
    return (
      <div>
        <h1 className="title">SketchToRender</h1>
        <p className="subtitle">
          Instantly render your sketches automatically. Coming soon...
        </p>
        <video
          className="sk2r-video"
          muted
          loop
          autostart
          autoPlay
          src={demovideo}
          type="video/mp4"
        />

        <p
          className="title2"
          style={{
            fontSize: "1.8rem",
            visibility: this.state.submitted != true ? "hidden" : "visible",
          }}
        >
          Recieve early access updates
        </p>
        <p
          className="title2"
          style={{
            fontSize: "1.8rem",
            visibility: this.state.submitted != true ? "visible" : "hidden",
          }}
        >
          Submitted
        </p>
        <form
          onSubmit={this.handleSubmit}
          style={{
            visibility: this.state.submitted != true ? "hidden" : "visible",
          }}
        >
          <input
            style={{
              width: "80%",
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
            }}
            type="email"
            id="email"
            placeholder="Youremail@email.com"
            className="input-field"
            onChange={this.handleChange}
          />
          <button
            className=" updatesbtn2 lighten-1 z-depth-0"
            onClick={(e) => this.setState({ submitted: false })}
          >
            Sign up{" "}
          </button>
        </form>
      </div>
    );
  }
}

export default connect()(SketchToRender);
