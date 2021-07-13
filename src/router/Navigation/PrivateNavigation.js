import React, { useEffect } from "react";

import "react-redux-notify/dist/ReactReduxNotify.css";

import PrimaryNav from "../../common/components/PrimaryNavbar";
import LightFooter from "../../common/components/LightFooter";
import SecondaryNav from "../../common/components/SecondaryNavbar";
import { Notify } from "react-redux-notify";

import history from "../../common/utils/history";
import Router from "../index";

import ReactGA from "react-ga";
import { hotjar } from "react-hotjar";

const NavigationAuth = ({ authUser }) => {
  useEffect(() => {
    hotjar.identify("USER_ID", { userProperty: authUser.uid });
    ReactGA.set({
      userId: authUser.uid,
      userEmail: authUser.email,
    });
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

export default NavigationAuth;
