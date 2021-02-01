import React from "react";

import { compose } from "recompose";

import {
  withAuthorization,
  withEmailVerification,
} from "../../app/auth/session";

const Explore = () => {
  return <h1>explore</h1>;
};

const condition = (authUser) => !!authUser;

export default compose(
  withEmailVerification,
  withAuthorization(condition)
)(Explore);
