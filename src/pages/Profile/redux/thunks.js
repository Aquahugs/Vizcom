import actions from "./actions";
import userService from "../../../common/services/user-service";

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
  } catch (error) {
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
  } catch (error) {
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
