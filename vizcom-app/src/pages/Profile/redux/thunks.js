import actions from "./actions";
import userService from "../../../common/services/user-service";
import collectionService from "../../../common/services/collection-service";

const getProfile = (uid) => async (dispatch) => {
  dispatch(actions.getProfileStarted());
  try {
    const response = await userService.getUserById(uid);
    dispatch(actions.getProfileSuccess(response.data));
  } catch (error) {
    dispatch(actions.getProfileError(error));
  }
};

const createProfile = (user) => async (dispatch) => {
  dispatch(actions.createProfileStarted());
  try {
    await userService.createUser(user);
    dispatch(actions.getProfileStarted());
    try {
      const response = await userService.getUserById(user.uuid);
      dispatch(actions.getProfileSuccess(response.data));
    } catch (error) {
      dispatch(actions.getProfileError(error));
    }
  } catch (error) {
    dispatch(actions.createProfileError(error));
  }
};

const updateProfile = (user, uuid) => async (dispatch) => {
  const newUser = {
    uuid,
    first_name: user.firstName,
    last_name: user.lastName,
    location: user.Location,
    bio: user.bio,
    twitter: user.twitter,
    instagram: user.instagram,
    personal_site: user.personalSite,
  };
  dispatch(actions.updateProfileStarted());
  try {
    await userService.updateUser(newUser, uuid);
    dispatch(actions.updateProfileSuccess(newUser));
  } catch (error) {
    dispatch(actions.updateProfileError(error));
  }
};

const getCollectionByUserId = (uid) => async (dispatch) => {
  dispatch(actions.getCollectionStarted());
  try {
    const response = await collectionService.getCollectionByUserId(uid);
    dispatch(actions.getCollectionSuccess(response.data));
  } catch (error) {
    dispatch(actions.getCollectionError(error));
  }
};

const collectImage = (imageObj) => async (dispatch) => {
  dispatch(actions.insertCollectionStarted());
  try {
    const response = await collectionService.collectImage(imageObj);
    dispatch(actions.insertCollectionSuccess(response.data));
  } catch (error) {
    dispatch(actions.insertCollectionError(error));
  }
};

export default {
  getCollectionByUserId,
  getProfile,
  updateProfile,
  createProfile,
  collectImage,
};
