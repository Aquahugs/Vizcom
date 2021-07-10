import React, { Component } from "react";
import { compose } from "recompose";
import "./sketchtorender.scss";
import demovideo from "../../../assets/SK2RDEMO.mp4";
import { withAuthorization } from "../../../router/auth/session";

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
      <div className="beta-container">
        <h2 style={{ fontSize: "2rem" }}>Sketch to render Beta v0.0.1</h2>
        <p>
          To gain Beta access please{" "}
          <span className="bold-me">
            join our Discord and post your account email in the
            #sketch-to-render
          </span>{" "}
          channel .
        </p>
        <p>
          Discord link -{" "}
          <a href="https://discord.gg/hRrbhMBq9x">
            https://discord.gg/hRrbhMBq9x
          </a>
        </p>
        <a href="https://discord.gg/hRrbhMBq9x">
          <img src="https://discord.com/assets/ff41b628a47ef3141164bfedb04fb220.png" />
        </a>

        <p>
          Sketch to render is a creative tool that takes your uploaded
          automotive design sketch and automatically renders it for you. If you
          come across any bugs or have any ideas on how we can improve your
          experience, please feel free to let us know in our Discord.
        </p>

        <video
          className="sk2r-video"
          muted
          loop
          autostart="true"
          autoPlay
          src={demovideo}
          type="video/mp4"
        />
      </div>
    );
  }
}

const condition = (authUser) => !!authUser;

export default compose(withAuthorization(condition))(SketchToRender);
