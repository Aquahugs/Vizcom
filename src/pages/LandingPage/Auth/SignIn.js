import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { compose } from "recompose";
import { connect } from "react-redux";
import GoogleButton from "react-google-button";

import { ProfileThunks } from "../../Profile/redux";

import { withFirebase } from "../../../router/auth/firebase";

const SignIn = () => (
  <div style={{ Textalign: "center" }}>
    <h1 style={{ color: "#fcfbfb", fontSize: "26px" }}>Sign in</h1>
    <SignInForm />
    <p style={{ color: "#fcfbfb", textAlign: "center" }}> or </p>
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
  google instead.
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
            <button disabled={isInvalid} type="submit" className="signin-btn ">
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
        debugger;
        this.props.getProfile(socialAuthUser.user.uid).catch(() => {
          debugger;
          const newUser = {
            uuid: socialAuthUser.user.uid,
            display_name: socialAuthUser.user.displayName,
            image_uri: socialAuthUser.user.photoUrl
              ? socialAuthUser.user.photoUrl
              : null,
            email: socialAuthUser.user.email,
            first_name: socialAuthUser.additionalUserInfo.profile.given_name,
            last_name: socialAuthUser.additionalUserInfo.profile.family_name,
          };
          this.props.createProfile(newUser);
        });
        this.props.history.push("/home");
      })
      .then(() => {
        this.setState({ error: null });
      })
      .catch((error) => {
        debugger;

        if (error.code === ERROR_CODE_ACCOUNT_EXISTS) {
          error.message = ERROR_MSG_ACCOUNT_EXISTS;
          const pendingCred = error.credential;
          // The provider account's email address.
          const email = error.email;
          // Get sign-in methods for this email.
          this.props.firebase
            .fetchSignInMethodsForEmail(email)
            .then((methods) => {
              // Step 3.
              // If the user has several sign-in methods,
              // the first method in the list will be the "recommended" method to use.
              if (methods[0] === "password") {
                // Asks the user their password.
                // In real scenario, you should handle this asynchronously.
                const password = prompt("Please enter your passwrod");
                this.props.firebase
                  .signInWithEmailAndPassword(email, password)
                  .then((result) => {
                    // Step 4a.
                    return result.user.linkWithCredential(pendingCred);
                  })
                  .then(() => {
                    // Google account successfully linked to the existing Firebase user.
                    this.props.history.push("/home");
                  });
                return;
              }
            });
        }
        this.setState({ error });
      });

    event.preventDefault();
  };

  render() {
    const { error } = this.state;

    return (
      <form onSubmit={this.onSubmit}>
        <button
          type="submit"
          style={{
            backgroundColor: "transparent",
            border: "none",
            width: "100%",
          }}
        >
          <GoogleButton
            type="light" // can be light or dark
            style={{ width: "100%" }}
          />
        </button>

        {error && <p>{error.message}</p>}
      </form>
    );
  }
}

const mapDispatchToProps = {
  getProfile: ProfileThunks.getProfileAsync,
  createProfile: ProfileThunks.createProfile,
};

const mapStateToProps = (state) => {
  return {
    userError: state.profile.error,
  };
};

const enhance = compose(
  withRouter,
  withFirebase,
  connect(mapStateToProps, mapDispatchToProps)
);

const SignInForm = enhance(SignInFormBase);

const SignInGoogle = enhance(SignInGoogleBase);

export default SignIn;

export { SignInForm, SignInGoogle };