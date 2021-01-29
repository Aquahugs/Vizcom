const INITIAL_STATE = {
  user: {
    firstName: "",
    lastName: "",
    email: "",
    isAuthenticated: false,
  },

  authError: null,
};

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "LOGIN_ERROR":
      return {
        ...state,
        authError: "Login failed",
      };
    case "LOGIN_SUCCESS":
      console.log("login success");
      console.log("user", action.user);
      return {
        ...state,
        authError: null,
        user: {
          ...action.user,
          isAuthenticated: true,
        },
      };

    case "SIGNOUT_SUCCESS":
      console.log("signout success");
      return { state, isAuthenticated: false };

    case "SIGNUP_SUCCESS":
      console.log("signup success");
      console.log(state);
      console.log(action);
      return {
        ...state,
        authError: null,
      };
    case "SIGNUP_ERROR":
      console.log("signup error");
      return {
        ...state,
        authError: action.err.message,
      };
    default:
      return state;
  }
};

export default authReducer;
