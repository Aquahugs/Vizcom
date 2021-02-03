import React from "react";
import { connect } from "react-redux";

import NavigationAuth from "./NavigationAuth";
import NavigationNonAuth from "./NavigationNonAuth";

const Navigation = ({ authUser }) => {
  return authUser ? (
    <NavigationAuth authUser={authUser} />
  ) : (
    <NavigationNonAuth />
  );
};

const mapStateToProps = (state) => ({
  authUser: state.session.authUser,
});

export default connect(mapStateToProps)(Navigation);
