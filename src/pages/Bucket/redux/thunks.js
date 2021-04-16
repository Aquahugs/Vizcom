import actions from "./actions";
import bucketService from "../../../common/services/bucket-service";

import { createNotification } from "react-redux-notify";
import {
  SUCCESS_NOTIFICATION_CONFIG,
  ERROR_NOTIFICATION_CONFIG,
  INFO_NOTIFICATION_CONFIG,
} from "../../../common/constants/notify-configs";

const getBuckets = (uid) => async (dispatch) => {
  dispatch(actions.getBucketsStarted());
  try {
    const response = await bucketService.getBuckets(uid);
    dispatch(actions.getBucketsSuccess(response.data));
  } catch (error) {
    dispatch(actions.getBucketsError(error));
  }
};
const getBucketsAsync = (uid) => async (dispatch) => {
  return new Promise(async (resolve, reject) => {
    dispatch(actions.getBucketsStarted());
    try {
      const response = await bucketService.getBuckets(uid);
      dispatch(actions.getBucketsSuccess(response.data));
      resolve(response.data);
    } catch (error) {
      dispatch(actions.getBucketsError(error));
      reject(error);
    }
  });
};

const createBucket = (bucket) => async (dispatch) => {
  dispatch(actions.createBucketStarted());
  try {
    const response = await bucketService.createBucket(bucket);
    dispatch(actions.createBucketSuccess(response.data));
    SUCCESS_NOTIFICATION_CONFIG.message = `${bucket.bucket_name} is ready for some images!`;
    dispatch(createNotification(SUCCESS_NOTIFICATION_CONFIG));
  } catch (error) {
    ERROR_NOTIFICATION_CONFIG.message = `We fumbled the bag on creating ${bucket.bucket_name}! Please reach out to ContactVizcom@gmail.com to resolve this issue!`;
    dispatch(createNotification(ERROR_NOTIFICATION_CONFIG));
    dispatch(actions.createBucketError(error));
  }
};

const addToBucket = (image) => async (dispatch) => {
  dispatch(actions.addToBucketStarted());
  try {
    const response = await bucketService.addToBucket(image);
    dispatch(actions.addToBucketSuccess(response.data));
    const bucket = response.data.find(
      (bucket) => bucket.bucket_id === image.bucket_id
    );
    SUCCESS_NOTIFICATION_CONFIG.message = `image added to ${bucket.bucket_name}`;
    dispatch(createNotification(SUCCESS_NOTIFICATION_CONFIG));
  } catch (error) {
    ERROR_NOTIFICATION_CONFIG.message = `We fumbled the bag on adding your image! Please reach out to ContactVizcom@gmail.com to resolve this issue!`;
    dispatch(createNotification(ERROR_NOTIFICATION_CONFIG));
    dispatch(actions.addToBucketsError(error));
  }
};

const deleteBucket = (bucket) => async (dispatch) => {
  dispatch(actions.deleteBucketStarted());
  try {
    const response = await bucketService.deleteBucket(bucket);
    dispatch(actions.deleteBucketSuccess(response.data));
    SUCCESS_NOTIFICATION_CONFIG.message = `Bucket deleted`;
    dispatch(createNotification(SUCCESS_NOTIFICATION_CONFIG));
  } catch (error) {
    ERROR_NOTIFICATION_CONFIG.message = `We fumbled the bag on deleting your bucket! Please reach out to ContactVizcom@gmail.com to resolve this issue!`;
    dispatch(createNotification(ERROR_NOTIFICATION_CONFIG));
    dispatch(actions.deleteBucketError(error));
  }
};
const deleteBucketImage = (image) => async (dispatch) => {
  dispatch(actions.deleteBucketImageStarted());
  try {
    const response = await bucketService.deleteBucketImage(image);
    dispatch(actions.deleteBucketImageSuccess(response.data));
    SUCCESS_NOTIFICATION_CONFIG.message = `Image deleted`;
    dispatch(createNotification(SUCCESS_NOTIFICATION_CONFIG));
  } catch (error) {
    ERROR_NOTIFICATION_CONFIG.message = `We fumbled the bag on deleting your image! Please reach out to ContactVizcom@gmail.com to resolve this issue!`;
    dispatch(createNotification(ERROR_NOTIFICATION_CONFIG));
    dispatch(actions.deleteBucketImageError(error));
  }
};

export default {
  getBuckets,
  getBucketsAsync,
  createBucket,
  addToBucket,
  deleteBucket,
  deleteBucketImage,
};
