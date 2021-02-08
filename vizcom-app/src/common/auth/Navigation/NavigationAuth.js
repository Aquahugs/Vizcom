import React from "react";

import PrimaryNav from "../../../common/components/PrimaryNavbar";
import Footer from "../../../common/components/Footer";
import SecondaryNav from "../../../common/components/SecondaryNavbar";

import history from "../../../common/utils/history";
import Router from "../../../router";

const NavigationAuth = () => {
  return (
    <div>
      <PrimaryNav />
      <SecondaryNav />
      <main>
        <Router history={history} />
      </main>
      <Footer />
    </div>
  );
};

export default NavigationAuth;
