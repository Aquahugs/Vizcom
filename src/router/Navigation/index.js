import React from "react";
import { connect } from "react-redux";

import PrivateNavigation from "./PrivateNavigation";
import PublicNavigation from "./PublicNavigation";
import About from "../../pages/About"

const Navigation = ({ authUser }) => {
  return authUser ? (
    <PrivateNavigation authUser={authUser} />
  ) : (
    <PublicNavigation />
  );

};

const mapStateToProps = (state) => ({
  authUser: state.session.authUser,
});

export default connect(mapStateToProps)(Navigation);
