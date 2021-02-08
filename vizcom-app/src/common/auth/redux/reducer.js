import TYPES from "./types";

const initialState = {
  user: {
    uuid: null,
    email: null,
    displayName: null,
  },
};

const sessionReducer = (state = initialState, action) => {
  debugger;
  switch (action.type) {
    case TYPES.SET_FIREBASE_USER:
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
};

export default sessionReducer;
