import React from "react";
import { withFirebase } from "../../../router/auth/firebase";
import './Auth.scss'

import './Auth.scss'

const SignOutButton = ({ firebase }) => (
  <button type="button" onClick={firebase.doSignOut} class = 'btn-flat sign-out'>
    Sign Out
  </button>
);

export default withFirebase(SignOutButton);
