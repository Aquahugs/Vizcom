import TYPES from "./types";
import { API_STATUS } from "../../../common/constants";

const initialState = {
  error: null,
  status: null,
  notifications: null,
};

const bucketReducer = (state = initialState, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    // SUCCESS ACTIONS
    case TYPES.GET_NOTIFICATIONS_SUCCESS:
      return {
        ...state,
        notifications: action.notifications,
        status: API_STATUS.SUCCESS,
        error: null,
      };
    case TYPES.GET_NOTIFICATIONS_ERROR:
      return {
        ...state,
        status: API_STATUS.ERROR,
        error: action.error,
      };
    case TYPES.GET_NOTIFICATIONS_STARTED:
      return {
        ...state,
        status: API_STATUS.STARTED,
        error: null,
      };
    case TYPES.SET_NOTIFICATION_STARTED:
      return {
        ...state,
        status: API_STATUS.STARTED,
        error: null,
      };
    case TYPES.SET_NOTIFICATION_SUCCESS:
      return {
        ...state,
        status: API_STATUS.SUCCESS,
        notifications: action.notifications,
        error: null,
      };
    case TYPES.SET_NOTIFICATION_ERROR:
      return {
        ...state,
        status: API_STATUS.ERROR,
        error: action.error,
      };
    case TYPES.DELETE_NOTIFICATION_SUCCESS:
      return {
        ...state,
        notifications: state.notifications.filter(
          (notification) => notification.id !== action.id
        ),
      };
    case TYPES.DELETE_NOTIFICATION_ERROR:
      return {
        ...state,
        error: action.error,
      };
    case TYPES.DELETE_ALL_NOTIFICATIONS_SUCCESS:
      return {
        ...state,
        notifications: [],
      };
    case TYPES.DELETE_ALL_NOTIFICATIONS_ERROR:
      return {
        ...state,
        error: action.error,
      };

    default:
      return state;
  }
};

export default bucketReducer;
