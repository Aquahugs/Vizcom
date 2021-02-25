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

export default {
  getBuckets,
  createBucket,
  addToBucket,
};
