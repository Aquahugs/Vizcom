import { combineReducers } from "redux";

import profileReducer from "../pages/Profile/redux/reducer";
import sessionReducer from "../router/auth/redux/reducer";

export default combineReducers({
  profile: profileReducer,
  session: sessionReducer,
});
