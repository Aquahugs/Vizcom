import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { compose } from "recompose";
import { connect } from "react-redux";

import { ProfileThunks } from "../../Profile/redux";

import { withFirebase } from "../../../router/auth/firebase";

const SignIn = () => (
  <div>
    <h1 style = {{color:"#fcfbfb",fontSize:'26px'}}>Sign in</h1>
    <SignInForm />
    <p> or </p>
    <SignInGoogle />
  </div>
);

const INITIAL_STATE = {
  email: "",
  password: "",
  error: null,
};

const ERROR_CODE_ACCOUNT_EXISTS =
  "auth/account-exists-with-different-credential";

const ERROR_MSG_ACCOUNT_EXISTS = `
  An account with an E-Mail address to
  this social account already exists. Try to login from
  this account instead and associate your social accounts on
  your personal account page.
`;

class SignInFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const { email, password } = this.state;

    this.props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then((response) => {
        this.setState({ ...INITIAL_STATE });
        // ned to handle first time sign ins with google
        this.props.getProfile(response.user.uid);
        this.props.history.push("/home");
      })
      .catch((error) => {
        this.setState({ error });
      });

    event.preventDefault();
  };

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { email, password, error } = this.state;

    const isInvalid = password === "" || email === "";

    return (
      <form onSubmit={this.onSubmit}>
        <div className="input-container">
          <div className="field-wrap">
            <label htmlFor="userEmail">
              Email <span className="req"></span>
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
            <label htmlFor="userPassword">
              Password<span className="req"></span>
            </label>
            <input
              name="password"
              value={password}
              onChange={this.onChange}
              type="password"
              placeholder="Password"
            />
            <button
              disabled={isInvalid}
              type="submit"
              className="bg-green-400 hover:bg-green-500 w-full py-2 text-white"
            >
              Sign In
            </button>

            {error && <p>{error.message}</p>}
          </div>
        </div>
      </form>
    );
  }
}

class SignInGoogleBase extends Component {
  constructor(props) {
    super(props);

    this.state = { error: null };
  }

  onSubmit = (event) => {
    this.props.firebase
      .doSignInWithGoogle()
      .then((socialAuthUser) => {
        console.log("herer");
        this.props.getProfile(socialAuthUser.user.uid);
        this.props.history.push("/home");
      })
      .then(() => {
        this.setState({ error: null });
      })
      .catch((error) => {
        if (error.code === ERROR_CODE_ACCOUNT_EXISTS) {
          error.message = ERROR_MSG_ACCOUNT_EXISTS;
        }

        this.setState({ error });
      });

    event.preventDefault();
  };

  render() {
    const { error } = this.state;

    return (
      <form onSubmit={this.onSubmit}>
        <button type="submit">Sign In with Google</button>

        {error && <p>{error.message}</p>}
      </form>
    );
  }
}

const mapDispatchToProps = {
  getProfile: ProfileThunks.getProfile,
};

const enhance = compose(
  withRouter,
  withFirebase,
  connect(null, mapDispatchToProps)
);

const SignInForm = enhance(SignInFormBase);

const SignInGoogle = enhance(SignInGoogleBase);

export default SignIn;

export { SignInForm, SignInGoogle };
