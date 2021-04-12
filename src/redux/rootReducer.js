import { combineReducers } from "redux";

import profileReducer from "../pages/Profile/redux/reducers";
import sessionReducer from "../router/auth/redux/reducer";
import bucketReducer from "../pages/Bucket/redux/reducers";
import collectionReducer from "../pages/Profile/Collection/redux/reducers";
import generateReducer from "../pages/Home/Generate/redux/reducers";
import notificationReducer from "./common/Toasts/reducers";

export default combineReducers({
  profile: profileReducer,
  session: sessionReducer,
  bucket: bucketReducer,
  collection: collectionReducer,
  generate: generateReducer,
  notification: notificationReducer,
});
