import React, { useState } from "react";

import "../LandingPage.scss";

import SignIn from "./SignIn";
import SignUp from "./SignUp";
import PasswordReset from "./PasswordReset";

const Auth = () => {
  let [authState, setAuthState] = useState("signUp");

  const renderAuthState = () => {
    switch (authState) {
      case "signUp":
        return (
          <div className = 'signup-container'>
            <SignUp />
            <p style = {{color:"#ececec"}}>
              Already have an account? 
              <a onClick={() => setAuthState((authState = "signIn"))}>
                Sign in
              </a>
            </p>
          </div>
        );
      case "signIn":
        return (
          <div>
            <SignIn />
            <p style = {{color:"#ececec"}}>
              Dont have an account?
              <a onClick={() => setAuthState((authState = "signUp"))}>
                Sign Up
              </a>
            </p>
            <p>
              <a onClick={() => setAuthState((authState = "passwordReset"))}>
                Forgot Password?
              </a>
            </p>
          </div>
        );
      case "passwordReset":
        return (
          <div>
            <PasswordReset />
            <p>
              <a onClick={() => setAuthState((authState = "signIn"))}>
                Back to login
              </a>
            </p>
          </div>
        );

      default:
        return <h1>No project match</h1>;
    }
  };

  return <div>{renderAuthState()}</div>;
};

export default Auth;
