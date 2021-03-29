import React from "react";

import PrimaryNav from "../../common/components/PrimaryNavbar";
import Footer from "../../common/components/Footer";
import SecondaryNav from "../../common/components/SecondaryNavbar";

import history from "../../common/utils/history";
import Router from "../index";

const NavigationAuth = () => {
  return (
    <div style={{ marginLeft: "10%", marginRight: "10%" }}>
      <PrimaryNav />
      <SecondaryNav history={history} />
      <main>
        <Router history={history} />
      </main>
      <Footer darkmode="light" />
    </div>
  );
};

export default NavigationAuth;
