const INITIAL_STATE = {
  user: null,
};

const applySetUser = (state, { user }) => ({
  ...state,
  user: user,
});

function userReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "USER_SET": {
      console.log("AUTH_USER_SET");
      return applySetUser(state, action);
    }
    default:
      return state;
  }
}

export default userReducer;
