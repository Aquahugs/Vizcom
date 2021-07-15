import React, { useEffect } from "react";
import { compose } from "recompose";
import "./invitecenter.scss";
import { withAuthorization } from "../../../router/auth/session";
import ProfileThunks from "../../Profile/redux/thunks";
import { connect } from "react-redux";
import { Form, Input, Button, Alert } from "antd";
import userService from "../../../common/services/user-service";

const InviteCenter = ({ history, user, uid, getProfile }) => {
  const [alert, setAlert] = React.useState({ value: false });

  useEffect(() => {
    if (!user) {
      getUserInfo();
    }
  }, []);

  const getUserInfo = async () => {
    getProfile(uid).then((dbUser) => {
      //   if (dbUser?.sk2r_beta) {
      //     history.push("/sketch-to-render/beta");
      //   }
    });
  };

  const onFinish = (values) => {
    console.log("Success:", values);
    const signup = {
      uuid: uid,
      email: values.email,
    };
    userService.sk2rBetaEarlyAccess(signup);
    setAlert({
      description:
        "Thanks for your interest in Sketch to Render! Your are now on the beta waitlist.",
      message: "Success",
      value: true,
      type: "success",
    });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
    setAlert({
      description: "Try again with a proper email",
      message: "Wait!",
      value: true,
      type: "error",
    });
    setTimeout(() => {
      setAlert(null);
    }, 5000);
  };

  return (
    <div className="page-container">
      <div className="header-content">
        <h2>Invite a Designer</h2>
        <p>
          Copy an invite URL and share it with a artist or designer to give them
          access to Vizcom's Sketch to render tools
        </p>
        <h3>5/5 Invites Available</h3>
      </div>

      <div className="row invite-container">
        <div className="col s12 m12 l12 ">
          <div className="col s8 m8 l8 code">
            <h1>Invite code</h1>
            <p>8376513104</p>
          </div>
          <div className="col s4 m4 l4 invite-btn-container">
            <Button>Copy Invite URL</Button>
          </div>
        </div>
      </div>
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
)(InviteCenter);
