import actions from "./actions";
import bucketService from "../../../common/services/bucket-service";

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
  } catch (error) {
    dispatch(actions.createBucketError(error));
  }
};

const addToBucket = (image) => async (dispatch) => {
  dispatch(actions.addToBucketStarted());
  try {
    const response = await bucketService.addToBucket(image);
    dispatch(actions.addToBucketSuccess(response.data));
  } catch (error) {
    dispatch(actions.addToBucketsError(error));
  }
};

const deleteBucket = (bucket) => async (dispatch) => {
  dispatch(actions.deleteBucketStarted());
  try {
    const response = await bucketService.deleteBucket(bucket);
    dispatch(actions.deleteBucketSuccess(response.data));
  } catch (error) {
    dispatch(actions.deleteBucketError(error));
  }
};
const deleteBucketImage = (image) => async (dispatch) => {
  dispatch(actions.deleteBucketImageStarted());
  try {
    const response = await bucketService.deleteBucketImage(image);
    dispatch(actions.deleteBucketImageSuccess(response.data));
  } catch (error) {
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
