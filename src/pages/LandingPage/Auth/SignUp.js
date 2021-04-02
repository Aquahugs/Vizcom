import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import { compose } from "recompose";
import { connect } from "react-redux";

import { ProfileThunks } from "../../Profile/redux";
import { withFirebase } from "../../../router/auth/firebase";

const SignUpPage = () => (
  <div>
    <SignUpForm />
  </div>
);

const INITIAL_STATE = {
  username: "",
  email: "",
  passwordOne: "",
  passwordTwo: "",
  error: null,
};

const ERROR_CODE_ACCOUNT_EXISTS = "auth/email-already-in-use";

const ERROR_MSG_ACCOUNT_EXISTS = `
  An account with this E-Mail address already exists.
  Try to login with this account instead. If you think the
  account is already used from one of the social logins, try
  to sign in with one of them. Afterward, associate your accounts
  on your personal account page.
`;

class SignUpFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const { username, email, passwordOne } = this.state;

    this.props.firebase
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      // if we want to add in email verification
      // .then(() => {
      //   return this.props.firebase.doSendEmailVerification();
      // })
      .then((response) => {
        console.log(response);
        const user = {
          uuid: response.user.uid,
          display_name: username,
          image_uri: null,
          email: response.user.email,
          first_name: null,
          last_name: null,
        };
        this.props.createProfile(user);
        this.setState({ ...INITIAL_STATE });
        this.props.history.push("/home");
      })
      .catch((error) => {
        console.log(error);
        if (error.code === ERROR_CODE_ACCOUNT_EXISTS) {
          error.message = ERROR_MSG_ACCOUNT_EXISTS;
        }

        this.setState({ error });
      });

    event.preventDefault();
  };

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { username, email, passwordOne, passwordTwo, error } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === "" ||
      email === "" ||
      username === "";

    return (
      <div>
        <div className="tab-content">
          <div id="signup">
            <h1
              style={{ color: "#fcfbfb", fontSize: "26px", fontWeight: "bold" }}
            >
              Sign Up{" "}
            </h1>
            <form onSubmit={this.onSubmit}>
              <div className="top-row">
                <div className="field-wrap">
                  <label>
                    Username<span className="req">*</span>
                  </label>
                  <input
                    name="username"
                    value={username}
                    onChange={this.onChange}
                    type="text"
                    placeholder="Full Name"
                  />
                </div>
                <div className="field-wrap">
                  <label>
                    Email Address<span className="req">*</span>
                  </label>
                  <input
                    name="email"
                    value={email}
                    onChange={this.onChange}
                    type="text"
                    placeholder="Email Address"
                  />
                </div>
                <div className="field-wrap">
                  <label>
                    Password<span className="req">*</span>
                  </label>
                  <input
                    name="passwordOne"
                    value={passwordOne}
                    onChange={this.onChange}
                    type="password"
                    placeholder="Password"
                  />
                </div>
                <div className="field-wrap">
                  <label>
                    Confirm Password<span className="req">*</span>
                  </label>
                  <input
                    name="passwordTwo"
                    value={passwordTwo}
                    onChange={this.onChange}
                    type="password"
                    placeholder="Confirm Password"
                  />
                </div>
                <button
                  disabled={isInvalid}
                  type="submit"
                  className="  signin-btn"
                >
                  Sign Up
                </button>
                {error && <p>{error.message}</p>}
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  createProfile: ProfileThunks.createProfile,
};

const enhance = compose(
  withRouter,
  withFirebase,
  connect(null, mapDispatchToProps)
);

const SignUpForm = enhance(SignUpFormBase);

export default SignUpPage;

export { SignUpForm };
