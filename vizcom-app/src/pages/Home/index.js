import "./home.scss";
import React, { useEffect, useState } from "react";

import { compose } from "recompose";

import { withAuthorization } from "../../common/auth/session";

import ToolCard from "../../common/components/Card";
import GenerateLogo from "../../assets/generate-logo.png";
import SketchToRenderLogo from "../../assets/s2r.png";
import { GENERATE, SKETCH_TO_RENDER } from "./home-const.js";
import api from "../../common/services/user-service";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.getAPI();
        console.log("ewllo", response.data);
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="tools">
      <div className="tools-header">
        <h1>Tools</h1>
      </div>
      {data &&
        data.map((user, i) => {
          return (
            <p key={`${user.email}_{anObjectMapped.email}`}>
              {user.name} - {user.email}
            </p>
          );
        })}
      <div className="nav row">
        <ToolCard
          link={GENERATE.link}
          name={GENERATE.name}
          description={GENERATE.description}
          logo={GenerateLogo}
        />
        <ToolCard
          link={SKETCH_TO_RENDER.link}
          name={SKETCH_TO_RENDER.name}
          description={SKETCH_TO_RENDER.description}
          logo={SketchToRenderLogo}
        />
      </div>
    </div>
  );
};

const condition = (authUser) => !!authUser;
export default compose(withAuthorization(condition))(Home);
