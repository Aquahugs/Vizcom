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

const updateProfile = ({ user }) => async (dispatch) => {
  const userId = { ...user.uuid };
  const newUser = { ...user };
  delete user.uuid;
  debugger;

  dispatch(actions.updateProfileStarted());
  try {
    await userService.updateUser(user, userId);
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

export default {
  getCollectionByUserId,
  getProfile,
  updateProfile,
  createProfile,
};
