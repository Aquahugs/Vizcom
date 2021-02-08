import TYPES from "./types";

const setFirebaseUser = (user) => ({
  type: TYPES.SET_FIREBASE_USER,
  user,
});

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  setFirebaseUser,
};
