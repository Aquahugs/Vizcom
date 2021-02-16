import { combineReducers } from "redux";

import profileReducer from "../pages/Profile/redux/reducers";
import sessionReducer from "../router/auth/redux/reducer";

export default combineReducers({
  profile: profileReducer,
  session: sessionReducer,
});
