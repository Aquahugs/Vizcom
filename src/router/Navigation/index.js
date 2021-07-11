import React, { useEffect } from "react";
import { connect } from "react-redux";

import PrivateNavigation from "./PrivateNavigation";
import PublicNavigation from "./PublicNavigation";

import ReactGA from "react-ga";
import { hotjar } from "react-hotjar";

const Navigation = ({ authUser }) => {
  // google analytics and hotjar tracking
  useEffect(() => {
    ReactGA.initialize("UA-201824980-1");
    hotjar.initialize(2497540, 6);
    if (authUser) {
      hotjar.identify("USER_ID", { userProperty: "authUser.uid" });
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
