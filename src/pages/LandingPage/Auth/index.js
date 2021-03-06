import React, { useState } from "react";

import "../LandingPage.scss";

import SignIn from "./SignIn";
import SignUp from "./SignUp";
import PasswordReset from "./PasswordReset";

const Auth = () => {
  let [authState, setAuthState] = useState("signIn");

  const renderAuthState = () => {
    switch (authState) {
      case "signUp":
        return (
          <div>
            <SignUp />
            <p style={{ color: "#232323", paddingTop: "5%" }}>
              Already have an account?
              <a onClick={() => setAuthState((authState = "signIn"))}>
                <span className="alr-signin"> Sign in</span>
              </a>
            </p>
          </div>
        );
      case "signIn":
        return (
          <div className="signin-container">
            <SignIn />
            <p style={{ color: "#232323", paddingTop: "5%" }}>
              Dont have an account?{" "}
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
          <div className="signin-container">
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
