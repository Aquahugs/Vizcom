import TYPES from "./types";

const setFirebaseUser = (authUser) => ({
  type: TYPES.SET_FIREBASE_USER,
  authUser,
});

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  setFirebaseUser,
};
