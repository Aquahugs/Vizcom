import React from "react";

import "react-redux-notify/dist/ReactReduxNotify.css";

import PrimaryNav from "../../common/components/PrimaryNavbar";
import LightFooter from "../../common/components/LightFooter";
import SecondaryNav from "../../common/components/SecondaryNavbar";
import { Notify } from "react-redux-notify";

import history from "../../common/utils/history";
import Router from "../index";

const NavigationAuth = () => {
  return (
    <div style={{ marginLeft: "10%", marginRight: "10%" }} className = "mobile-container">
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
