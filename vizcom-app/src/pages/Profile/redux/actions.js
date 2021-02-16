import TYPES from "./types";

const getProfileError = () => ({
  type: TYPES.GET_PROFILE_ERROR,
  //TODO: Helper method to create meaningful messages based on the error
  error: "Unable to get User Profile",
});

const getProfileStarted = () => ({
  type: TYPES.GET_PROFILE_STARTED,
});

const getProfileSuccess = (profile) => ({
  type: TYPES.GET_PROFILE_SUCCESS,
  profile,
});

const createProfileError = () => ({
  type: TYPES.CREATE_PROFILE_ERROR,
  //TODO: Helper method to create meaningful messages based on the error
  error: "Unable to create User Profile",
});

const createProfileStarted = () => ({
  type: TYPES.CREATE_PROFILE_STARTED,
});

const createProfileSuccess = (profile) => ({
  type: TYPES.CREATE_PROFILE_SUCCESS,
  profile,
});

const updateProfileError = () => ({
  type: TYPES.UPDATE_PROFILE_ERROR,
  error: "Unable to create User Profile",
});

const updateProfileStarted = () => ({
  type: TYPES.UPDATE_PROFILE_STARTED,
});

const updateProfileSuccess = (profile) => ({
  type: TYPES.UPDATE_PROFILE_SUCCESS,
  profile,
});

const getCollectionError = () => ({
  type: TYPES.GET_COLLECTION_ERROR,
  //TODO: Helper method to create meaningful messages based on the error
  error: "Unable to get User Collection",
});

const getCollectionStarted = () => ({
  type: TYPES.GET_COLLECTION_STARTED,
});

const getCollectionSuccess = (collection) => ({
  type: TYPES.GET_COLLECTION_SUCCESS,
  collection,
});

const profileActions = {
  getProfileError,
  getProfileStarted,
  getProfileSuccess,
  updateProfileError,
  updateProfileStarted,
  updateProfileSuccess,
  createProfileError,
  createProfileStarted,
  createProfileSuccess,
  getCollectionError,
  getCollectionStarted,
  getCollectionSuccess,
};

export default profileActions;
