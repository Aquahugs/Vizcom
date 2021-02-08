import React from "react";

import { compose } from "recompose";

import { withAuthorization } from "../../common/auth/session";

const Explore = () => {
  return <h1>explore</h1>;
};

const condition = (authUser) => !!authUser;

export default compose(withAuthorization(condition))(Explore);
