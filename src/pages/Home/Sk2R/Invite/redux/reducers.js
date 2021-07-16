import TYPES from "./types";
import { API_STATUS } from "../../../../../common/constants";

const initialState = {
  error: null,
  status: null,
  invites: null,
};

const InvitesReducer = (state = initialState, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    // SUCCESS ACTIONS
    case TYPES.GET_INVITES_SUCCESS:
      return {
        ...state,
        invites: action.Invites,
        status: null,
      };
    case TYPES.INSERT_INVITES_SUCCESS:
      return {
        ...state,
        invites: action.Invites,
        status: null,
      };
    case TYPES.REDEEM_INVITES_IMAGE_SUCCESS:
      return {
        ...state,
        invites: action.Invites,
        status: null,
      };

    // API CALL STARTED ACTIONS
    case TYPES.GET_INVITES_STARTED:
      return {
        ...state,
        status: API_STATUS.GETTING,
        error: null,
      };
    case TYPES.INSERT_INVITES_STARTED:
      return {
        ...state,
        status: API_STATUS.GETTING,
        error: null,
      };
    case TYPES.REDEEM_INVITES_IMAGE_STARTED:
      return {
        ...state,
        status: API_STATUS.GETTING,
        error: null,
      };

    // API CALL ERROR ACTIONS
    case TYPES.GET_INVITES_ERROR:
      return {
        ...state,
        error: action.error,
        status: null,
      };
    case TYPES.INSERT_INVITES_ERROR:
      return {
        ...state,
        error: action.error,
        status: null,
      };
    case TYPES.REDEEM_INVITES_IMAGE_ERROR:
      return {
        ...state,
        error: action.error,
        status: null,
      };

    default:
      return state;
  }
};

export default InvitesReducer;
