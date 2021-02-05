import TYPES from "./types";

const setUser = (user) => ({
  type: TYPES.SET_USER,
  user,
});

export default {
  setUser,
};
