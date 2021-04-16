import actions from "./actions";
import collectionService from "../../../../common/services/collection-service";
import { createNotification } from "react-redux-notify";
import {
  SUCCESS_NOTIFICATION_CONFIG,
  ERROR_NOTIFICATION_CONFIG,
  INFO_NOTIFICATION_CONFIG,
} from "../../../../common/constants/notify-configs";

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
const collectImageAsync = (imageObj) => async (dispatch) => {
  return new Promise(async (resolve, reject) => {
    dispatch(actions.insertCollectionStarted());
    try {
      const response = await collectionService.collectImage(imageObj);
      dispatch(actions.insertCollectionSuccess(response.data));
      resolve(response.data);
    } catch (error) {
      dispatch(actions.insertCollectionError(error));
      reject(error);
    }
  });
};

const deleteCollectionImage = (req) => async (dispatch) => {
  dispatch(actions.deleteCollectionImageStarted());
  try {
    const response = await collectionService.deleteCollectionImage(req);
    dispatch(actions.deleteCollectionImageSuccess(response.data));
    SUCCESS_NOTIFICATION_CONFIG.message = `Image deleted from your collection!`;
    dispatch(createNotification(SUCCESS_NOTIFICATION_CONFIG));
  } catch (error) {
    ERROR_NOTIFICATION_CONFIG.message =
      "We fumbled the bag on deleting the image! Please reach out to ContactVizcom@gmail.com to resolve this issue!";
    dispatch(createNotification(ERROR_NOTIFICATION_CONFIG));
    dispatch(actions.deleteCollectionImageError(error));
  }
};

export default {
  deleteCollectionImage,
  getCollectionByUserId,
  collectImage,
  collectImageAsync,
};
