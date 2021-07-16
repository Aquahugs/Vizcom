import React, { useEffect } from "react";
import { connect } from "react-redux";

import "react-redux-notify/dist/ReactReduxNotify.css";

import PrimaryNav from "../../common/components/PrimaryNavbar";
import LightFooter from "../../common/components/LightFooter";
import SecondaryNav from "../../common/components/SecondaryNavbar";
import { Notify } from "react-redux-notify";

import history from "../../common/utils/history";
import Router from "../index";
import inviteThunks from "../../pages/Home/Sk2R/Invite/redux/thunks";

import ReactGA from "react-ga";
import { hotjar } from "react-hotjar";
import { compose } from "redux";

const NavigationAuth = ({ authUser, getInvites }) => {
  useEffect(() => {
    if (authUser) {
      localStorage.removeItem("invite_id");
      hotjar.identify("USER_ID", { userProperty: authUser.uid });
      ReactGA.set({
        userId: authUser.uid,
        userEmail: authUser.email,
      });
      getInvites(authUser.uid);
    }
  }, []);
  return (
    <div className="app-container">
      <PrimaryNav />
      <SecondaryNav history={history} />
      <main>
        <Router history={history} />
      </main>
      <Notify />
      <div style={{ marginTop: "25%" }}>
        <LightFooter />
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  getInvites: inviteThunks.getInvitesByUserId,
};

export default connect(null, mapDispatchToProps)(NavigationAuth);
