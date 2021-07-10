import React, { useEffect } from "react";
import { compose } from "recompose";
import "./sketchtorender.scss";
import demovideo from "../../../assets/SK2RDEMO.mp4";
import { withAuthorization } from "../../../router/auth/session";
import ProfileThunks from "../../Profile/redux/thunks";
import { connect } from "react-redux";

const SketchToRender = ({ history, user, uid, getProfile }) => {
  useEffect(() => {
    if (!user) {
      getUserInfo();
    } else {
      if (user?.sk2r_beta) {
        history.push("/sketch-to-render/beta");
      }
    }
  }, []);

  const getUserInfo = async () => {
    getProfile(uid).then((dbUser) => {
      if (dbUser?.sk2r_beta) {
        history.push("/sketch-to-render/beta");
      }
    });
  };

  return (
    <div className="beta-container">
      <h2 style={{ fontSize: "2rem" }}>Sketch to render Beta v0.0.1</h2>
      <p>
        To gain Beta access please{" "}
        <span className="bold-me">
          join our Discord and post your account email in the #sketch-to-render
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
        Sketch to render is a creative tool that takes your uploaded automotive
        design sketch and automatically renders it for you. If you come across
        any bugs or have any ideas on how we can improve your experience, please
        feel free to let us know in our Discord.
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
};

const condition = (authUser) => !!authUser;

const mapStateToProps = (state) => ({
  uid: state.session.authUser.uid,
  user: state.profile.user,
});
const mapDispatchToProps = {
  getProfile: ProfileThunks.getProfileAsync,
};

export default compose(
  withAuthorization(condition),
  connect(mapStateToProps, mapDispatchToProps)
)(SketchToRender);
