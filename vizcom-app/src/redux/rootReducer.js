import { combineReducers } from "redux";

import exploreReducer from "../pages/Explore/redux/explore.reducers";
import sketchToRenderReducer from "../pages/Home/SketchToRender/redux/sketchToRender.reducers";
import profileReducer from "../pages/Profile/redux/reducer";
import generateReducer from "../pages/Home/Generate/redux/generate.reducers";
import sessionReducer from "../common/auth/redux/reducer";

export default combineReducers({
  explore: exploreReducer,
  sketchToRender: sketchToRenderReducer,
  profile: profileReducer,
  generate: generateReducer,
  session: sessionReducer,
});
