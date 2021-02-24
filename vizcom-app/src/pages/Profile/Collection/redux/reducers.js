import TYPES from "./types";
import { API_STATUS } from "../../../../common/constants";

const initialState = {
  error: null,
  status: null,
  collection: [],
};

const collectionReducer = (state = initialState, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    // SUCCESS ACTIONS
    case TYPES.GET_COLLECTION_SUCCESS:
      return {
        ...state,
        collection: action.collection,
        status: null,
      };
    case TYPES.INSERT_COLLECTION_SUCCESS:
      return {
        ...state,
        collection: action.collection,
        status: null,
      };

    // API CALL STARTED ACTIONS
    case TYPES.GET_COLLECTION_STARTED:
      return {
        ...state,
        status: API_STATUS.GETTING,
        error: null,
      };
    case TYPES.INSERT_COLLECTION_STARTED:
      return {
        ...state,
        status: API_STATUS.GETTING,
        error: null,
      };

    // API CALL ERROR ACTIONS
    case TYPES.GET_COLLECTION_ERROR:
      return {
        ...state,
        error: action.error,
        status: null,
      };
    case TYPES.INSERT_COLLECTION_ERROR:
      return {
        ...state,
        error: action.error,
        status: null,
      };
    default:
      return state;
  }
};

export default collectionReducer;
