import TYPES from "./types";

const getGeneratedImagesError = () => ({
  type: TYPES.GET_GENERATED_IMAGES_ERROR,
  //TODO: Helper method to create meaningful messages based on the error
  error: "Unable to get User Profile",
});

const getGeneratedImagesStarted = () => ({
  type: TYPES.GET_GENERATED_IMAGES_STARTED,
});

const getGeneratedImagesSuccess = (profile) => ({
  type: TYPES.GET_GENERATED_IMAGES_SUCCESS,
  profile,
});

const profileActions = {
  getGeneratedImagesError,
  getGeneratedImagesStarted,
  getGeneratedImagesSuccess,
};

export default profileActions;
