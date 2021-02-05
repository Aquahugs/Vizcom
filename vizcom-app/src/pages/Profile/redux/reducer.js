import PROFILE_TYPES from "./types";
import { INITIAL_PROFILE } from "../constants";

const initialState = {
  user: INITIAL_PROFILE,
  userPhoto: "",
  userBio: "",
  buckets: [],
  collection: [],
};

const profileReducer = (state = initialState, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case PROFILE_TYPES.SET_USER: {
      return {
        ...state,
        user: action.user,
      };
    }
    default:
      return state;
  }
};

export default profileReducer;
