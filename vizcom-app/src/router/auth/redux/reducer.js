import TYPES from "./types";

const initialState = {
  authUser: null,
};

const sessionReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.SET_FIREBASE_USER:
      return {
        ...state,
        authUser: action.authUser,
      };
    default:
      return state;
  }
};

export default sessionReducer;
