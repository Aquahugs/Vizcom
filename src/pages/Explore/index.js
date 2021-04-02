import React from "react";
import { compose } from "recompose";
import "./explore.scss";
import { withAuthorization } from "../../router/auth/session";
import mock from "../../assets/Explore.png";
import mobilemock from "../../assets/explore-mobile.png";
import { Desktop, Tablet, Mobile } from "../Responsive";
const Explore = () => {
  return (
    <div>
      <Desktop>
        <div className="row placeholder explore-container ">
          <div className="col s12 m12 l12">
            <h1 className="title">Explore</h1>
            <p> A live activity feed of the Vizcom community. Coming soon...</p>
            <img alt="mock" className="explore-mock" src={mock} />
          </div>
        </div>
      </Desktop>
      <Tablet>
        <div className="row placeholder">
          <div className="col s12 m12 l12">
            <h1 className="title">Explore</h1>
            <p> A live activity feed of the Vizcom community. Coming soon...</p>
            <img alt="mock" className="explore-mock" src={mock} />
          </div>
        </div>
      </Tablet>
      <Mobile>
        <div className="row placeholder">
          <div className="col s12 m12 l12">
            <h1 className="title">Explore</h1>
            <p>
              A live activity feed of the Vizcom community. <br />
              Coming soon...
            </p>
            <img alt="mock" className="explore-mock" src={mobilemock} />
          </div>
        </div>
      </Mobile>
    </div>
  );
};

const condition = (authUser) => !!authUser;

export default compose(withAuthorization(condition))(Explore);
