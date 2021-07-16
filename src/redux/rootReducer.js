import { combineReducers } from "redux";

import profileReducer from "../pages/Profile/redux/reducers";
import sessionReducer from "../router/auth/redux/reducer";
import bucketReducer from "../pages/Bucket/redux/reducers";
import collectionReducer from "../pages/Profile/Collection/redux/reducers";
import generateReducer from "../pages/Home/Generate/redux/reducers";
import exploreReducer from "../pages/Explore/redux/reducers";
import notifyReducer from "react-redux-notify";
import notificationCenterReducer from "./Notifications/redux/reducers";
import inviteReducer from "../pages/Home/Sk2R/Invite/redux/reducers";

export default combineReducers({
  profile: profileReducer,
  session: sessionReducer,
  bucket: bucketReducer,
  collection: collectionReducer,
  generate: generateReducer,
  notifications: notifyReducer,
  explore: exploreReducer,
  notificationCenter: notificationCenterReducer,
  invites: inviteReducer,
});
