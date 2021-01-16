// import React from "react";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link,
//   useRouteMatch,
//   useParams
// } from "react-router-dom";
// import Profile from "../pages/Profile";
// import Explore from "../pages/Explore";

// export default function VizcomTools() {
// let match = useRouteMatch();

// return (
//     <div>
//     <h2>Vizcom</h2>

//     <ul>
//         <li>
//         <Link to={`${match.url}/generate`}>Generate</Link>
//         </li>
//         <li>
//         <Link to={`${match.url}/sketch-to-render`}>
//             Sketch to Render
//         </Link>
//         </li>
//     </ul>

//     {/* The Topics page has its own <Switch> with more routes
//         that build on the /topics URL path. You can think of the
//         2nd <Route> here as an "index" page for all topics, or
//         the page that is shown when no topic is selected */}
//     <Switch>
//         <Route path={`${match.path}/:toolId`}>
//         <Vizcom />
//         </Route>
//         <Route path={match.path}>
//         <h3>Please select a topic.</h3>
//         </Route>
//     </Switch>
//     </div>
// );
// }

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