import TYPES from "./types";
import { API_STATUS } from "../../../common/constants";

const initialState = {
  error: null,
  status: null,
  feed: null,
};

const exploreReducer = (state = initialState, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    // SUCCESS ACTIONS
    case TYPES.GET_EXPLORE_FEED_SUCCESS:
      return {
        ...state,
        feed: action.exploreFeed,
        status: null,
      };

    // API CALL STARTED ACTIONS
    case TYPES.GET_EXPLORE_FEED_STARTED:
      return {
        ...state,
        status: API_STATUS.GETTING,
        error: null,
      };

    // API CALL ERROR ACTIONS
    case TYPES.GET_EXPLORE_FEED_ERROR:
      return {
        ...state,
        error: action.error,
        status: null,
      };

    default:
      return state;
  }
};

export default exploreReducer;
