
import Generate from "./Generate";
import SketchToRender from "./SketchToRender";

import React from "react";
import {
  Routes,
  Route,
  Link,
} from "react-router-dom";

export default function Vizcom() {

return (
    <div>
        <nav>
            <Link to="generate">Generate</Link>
            <br></br>
            <Link to="sketch-to-render">Sketch To Render</Link>
        </nav>

        <Routes>
            {/* <Route path="/" element={<UsersIndex />} /> */}
            <Route path="generate" element={<Generate />} />
            <Route path="sketch-to-render" element={<SketchToRender />} />
        </Routes>
    </div>
);
}