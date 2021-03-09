import actions from "./actions";
import collectionService from "../../../../common/services/collection-service";

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

export default {
  getCollectionByUserId,
  collectImage,
  collectImageAsync,
};
