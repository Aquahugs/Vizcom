import React from "react";

import history from "../../common/utils/history";
import Router from "../index";

const NavigationNonAuth = () => {
  return (
    <div>
      <Router history={history} />
    </div>
  );
};

export default NavigationNonAuth;
