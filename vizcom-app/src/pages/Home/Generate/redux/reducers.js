import TYPES from "./types";
import { API_STATUS } from "../../../../common/constants";

const initialState = {
  error: null,
  status: null,
  images: null,
};

const generateReducer = (state = initialState, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    // SUCCESS ACTIONS
    case TYPES.GET_GENERATED_IMAGES_SUCCESS:
      return {
        ...state,
        images: action.profile,
        status: null,
      };

    // API CALL STARTED ACTIONS
    case TYPES.GET_GENERATED_IMAGES_STARTED:
      return {
        ...state,
        status: API_STATUS.GETTING,
        error: null,
      };

    // API CALL ERROR ACTIONS
    case TYPES.GET_GENERATED_IMAGES_ERROR:
      return {
        ...state,
        error: action.error,
        status: null,
      };

    default:
      return state;
  }
};

export default generateReducer;
