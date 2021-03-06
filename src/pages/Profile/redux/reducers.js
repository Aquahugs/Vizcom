import TYPES from "./types";
import { API_STATUS } from "../../../common/constants";

const initialState = {
  error: null,
  status: null,
  user: null,
};

const profileReducer = (state = initialState, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    // SUCCESS ACTIONS
    case TYPES.GET_PROFILE_SUCCESS:
      return {
        ...state,
        user: action.profile,
        status: null,
      };
    case TYPES.CREATE_PROFILE_SUCCESS:
      return {
        ...state,
        status: null,
      };
    case TYPES.UPDATE_PROFILE_SUCCESS:
      return {
        ...state,
        user: action.profile,
        status: null,
      };

    // API CALL STARTED ACTIONS
    case TYPES.CREATE_PROFILE_STARTED:
      return {
        ...state,
        status: API_STATUS.GETTING,
        error: null,
      };
    case TYPES.GET_PROFILE_STARTED:
      return {
        ...state,
        status: API_STATUS.GETTING,
        error: null,
      };
    case TYPES.UPDATE_PROFILE_STARTED:
      return {
        ...state,
        status: API_STATUS.UPDATING,
        error: null,
      };

    // API CALL ERROR ACTIONS
    case TYPES.GET_PROFILE_ERROR:
    case TYPES.UPDATE_PROFILE_ERROR:
      return {
        ...state,
        error: action.error,
        status: null,
      };
    case TYPES.CREATE_PROFILE_ERROR:
      return {
        ...state,
        error: action.error,
        status: null,
      };
    default:
      return state;
  }
};

export default profileReducer;
