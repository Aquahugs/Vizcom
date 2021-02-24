import { combineReducers } from "redux";

import profileReducer from "../pages/Profile/redux/reducers";
import sessionReducer from "../router/auth/redux/reducer";
import bucketReducer from "../pages/Profile/Bucket/redux/reducers";
import collectionReducer from "../pages/Profile/Collection/redux/reducers";

export default combineReducers({
  profile: profileReducer,
  session: sessionReducer,
  bucket: bucketReducer,
  collection: collectionReducer
});
