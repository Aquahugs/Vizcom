import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

import { withFirebase } from "../../../app/firebase";

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
      .then((authUser) => {
        // Create a user in your Firebase realtime database
        fetch(
          `https://designerspendroplet.getdpsvapi.com/adduser?uuid=${authUser.user.uid}&username=${authUser.user.displayName}&photourl=''&bio=''&email=${authUser.user.email}`
        );
        // return this.props.firebase.user(authUser.user.uid).set({
        //   username,
        //   email,
        // });
      })
      .then(() => {
        return this.props.firebase.doSendEmailVerification();
      })
      .then(() => {
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
      <div class="form">
        <div class="tab-content">
          <div id="signup">
            <h1>Sign Up </h1>
            <form onSubmit={this.onSubmit}>
              <div class="top-row">
                <div class="field-wrap">
                  <label>
                    Username<span class="req">*</span>
                  </label>
                  <input
                    name="username"
                    value={username}
                    onChange={this.onChange}
                    type="text"
                    placeholder="Full Name"
                  />
                </div>
                <div class="field-wrap">
                  <label>
                    Email Address<span class="req">*</span>
                  </label>
                  <input
                    name="email"
                    value={email}
                    onChange={this.onChange}
                    type="text"
                    placeholder="Email Address"
                  />
                </div>
                <div class="field-wrap">
                  <label>
                    Password<span class="req">*</span>
                  </label>
                  <input
                    name="passwordOne"
                    value={passwordOne}
                    onChange={this.onChange}
                    type="password"
                    placeholder="Password"
                  />
                </div>
                <div class="field-wrap">
                  <label>
                    Confirm Password<span class="req">*</span>
                  </label>
                  <input
                    name="passwordTwo"
                    value={passwordTwo}
                    onChange={this.onChange}
                    type="password"
                    placeholder="Confirm Password"
                  />
                </div>
                <div className="row btn-container">
                  <button
                    disabled={isInvalid}
                    type="submit"
                    class="bg-green-400 hover:bg-green-500 w-full py-2 text-white"
                  >
                    Sign Up
                  </button>

                  {error && <p>{error.message}</p>}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const SignUpForm = withRouter(withFirebase(SignUpFormBase));

export default SignUpPage;

export { SignUpForm };
