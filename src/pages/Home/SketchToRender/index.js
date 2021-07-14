import React, { useEffect } from "react";
import { compose } from "recompose";
import "./sketchtorender.scss";
import demovideo from "../../../assets/SK2RDEMO.mp4";
import discord from "../../../assets/discord.PNG";
import { withAuthorization } from "../../../router/auth/session";
import ProfileThunks from "../../Profile/redux/thunks";
import { connect } from "react-redux";
import { Form, Input, Button, Checkbox } from "antd";

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

  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="beta-container">
      <h2 style={{ fontSize: "2rem" }}>Sketch to render Beta v0.0.1</h2>
      <p>
        The current sketch to render beta access program is currently closed.
      </p>
      <p style={{ fontWeight: "bold" }}>
        Enter your email down below to sign up for the next beta access.
      </p>
      <div className="row email-form">
        <div className="col s12 m12 l12">
          <Form
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item
              label="Email"
              name="email"
              rules={[{ required: true, message: "Please input your email!" }]}
            >
              <Input />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type="primary" htmlType="submit">
                Sign up
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>

      <h2 style={{ fontSize: "40px" }}>Check out our Discord</h2>

      <p>
        Discord link -{" "}
        <a href="https://discord.gg/hRrbhMBq9x">
          https://discord.gg/hRrbhMBq9x
        </a>
      </p>
      <a href="https://discord.gg/hRrbhMBq9x">
        <img src="https://discord.com/assets/ff41b628a47ef3141164bfedb04fb220.png" />
      </a>
      <video
        className="sk2r-video"
        muted
        loop
        autostart="true"
        autoPlay
        src={demovideo}
        type="video/mp4"
      />
      <p>
        Sketch to render is a creative tool that takes your uploaded automotive
        design sketch and automatically renders it for you. If you come across
        any bugs or have any ideas on how we can improve your experience, please
        feel free to let us know in our Discord.
      </p>
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
