import TYPES from "./types";
import { API_STATUS } from "../../../common/constants";

const initialState = {
  error: null,
  status: null,
  buckets: null,
};

const bucketReducer = (state = initialState, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    // SUCCESS ACTIONS
    case TYPES.GET_BUCKETS_SUCCESS:
      return {
        ...state,
        buckets: action.buckets,
        status: null,
      };
    case TYPES.CREATE_BUCKET_SUCCESS:
      return {
        ...state,
        buckets: action.buckets,
        status: null,
      };
    case TYPES.ADD_TO_BUCKET_SUCCESS:
      return {
        ...state,
        buckets: action.buckets,
        status: null,
      };

    // API CALL STARTED ACTIONS
    case TYPES.GET_BUCKETS_STARTED:
      return {
        ...state,
        status: API_STATUS.GETTING,
        error: null,
      };
    case TYPES.CREATE_BUCKET_STARTED:
      return {
        ...state,
        status: API_STATUS.GETTING,
        error: null,
      };
    case TYPES.ADD_TO_BUCKET_STARTED:
      return {
        ...state,
        status: API_STATUS.GETTING,
        error: null,
      };

    // API CALL ERROR ACTIONS
    case TYPES.GET_BUCKETS_ERROR:
      return {
        ...state,
        error: action.error,
        status: null,
      };
    case TYPES.CREATE_BUCKET_ERROR:
      return {
        ...state,
        error: action.error,
        status: null,
      };
    case TYPES.ADD_TO_BUCKET_ERROR:
      return {
        ...state,
        error: action.error,
        status: null,
      };

    default:
      return state;
  }
};

export default bucketReducer;
