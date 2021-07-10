import React, { useEffect } from "react";
import { connect } from "react-redux";

import PrivateNavigation from "./PrivateNavigation";
import PublicNavigation from "./PublicNavigation";

import ReactGA from "react-ga";

const Navigation = ({ authUser }) => {
  useEffect(() => {
    if (authUser) {
      ReactGA.set({
        userId: authUser.uid,
        userEmail: authUser.email,
      });
    }
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, [authUser]);

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
