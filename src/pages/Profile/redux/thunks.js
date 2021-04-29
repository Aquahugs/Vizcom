import actions from "./actions";
import userService from "../../../common/services/user-service";
import { createNotification } from "react-redux-notify";
import {
  SUCCESS_NOTIFICATION_CONFIG,
  ERROR_NOTIFICATION_CONFIG,
  INFO_NOTIFICATION_CONFIG,
} from "../../../common/constants/notify-configs";

const getProfile = (uid) => async (dispatch) => {
  dispatch(actions.getProfileStarted());
  try {
    const response = await userService.getUserById(uid);
    dispatch(actions.getProfileSuccess(response.data));
  } catch (error) {
    dispatch(actions.getProfileError(error));
  }
};

const getProfileAsync = (uid) => async (dispatch) => {
  return new Promise(async (resolve, reject) => {
    dispatch(actions.getProfileStarted());
    try {
      const response = await userService.getUserById(uid);
      dispatch(actions.getProfileSuccess(response.data));
      resolve(response.data);
    } catch (error) {
      dispatch(actions.getProfileError(error));
      reject(error);
    }
  });
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
    INFO_NOTIFICATION_CONFIG.message =
      "Congrats! You are officially a user of Vizcom!";
    dispatch(createNotification(INFO_NOTIFICATION_CONFIG));
  } catch (error) {
    ERROR_NOTIFICATION_CONFIG.message =
      "We fumbled the bag on creating your profile! Please reach out to ContactVizcom@gmail.com to resolve this issue!";
    dispatch(createNotification(ERROR_NOTIFICATION_CONFIG));
    dispatch(actions.createProfileError(error));
  }
};

const updateProfile = (user, uuid) => async (dispatch) => {
  const newUser = {
    uuid,
    first_name: user.firstName,
    last_name: user.lastName,
    location: user.location,
    bio: user.bio,
    twitter: user.twitter,
    instagram: user.instagram,
    personal_site: user.personalSite,
  };
  dispatch(actions.updateProfileStarted());
  try {
    await userService.updateUser(newUser, uuid);
    dispatch(actions.updateProfileSuccess(newUser));
    INFO_NOTIFICATION_CONFIG.message =
      "Your profile has been updated successfully";
    dispatch(createNotification(INFO_NOTIFICATION_CONFIG));
  } catch (error) {
    ERROR_NOTIFICATION_CONFIG.message =
      "We fumbled the bag on saving your profile!";
    dispatch(createNotification(ERROR_NOTIFICATION_CONFIG));
    dispatch(actions.updateProfileError(error));
  }
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getProfile,
  updateProfile,
  createProfile,
  getProfileAsync,
};
