import { combineReducers } from "redux";

import exploreReducer from "../pages/Explore/redux/explore.reducers";
import sketchToRenderReducer from "../pages/Home/SketchToRender/redux/sketchToRender.reducers";
import profileReducer from "../pages/Profile/redux/profile.reducers";
import generateReducer from "../pages/Home/Generate/redux/generate.reducers";
import userReducer from "../pages/LandingPage/Auth/redux/user.reducers";
import sessionReducer from "./auth/session/redux/session.reducers";

export default combineReducers({
  exploreState: exploreReducer,
  sketchToRenderState: sketchToRenderReducer,
  profileState: profileReducer,
  generateState: generateReducer,
  sessionState: sessionReducer,
  userState: userReducer,
});
