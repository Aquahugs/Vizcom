import TYPES from "./types";

const getBucketsError = (e) => ({
  type: TYPES.GET_BUCKETS_ERROR,
  //TODO: Helper method to create meaningful messages based on the error
  error: `Unable to get buckets, ERROR: ${e}`,
});

const getBucketsStarted = () => ({
  type: TYPES.GET_BUCKETS_STARTED,
});

const getBucketsSuccess = (buckets) => ({
  type: TYPES.GET_BUCKETS_SUCCESS,
  buckets,
});

const createBucketError = () => ({
  type: TYPES.CREATE_BUCKET_ERROR,
  //TODO: Helper method to create meaningful messages based on the error
  error: "Unable to create bucket",
});

const createBucketStarted = () => ({
  type: TYPES.CREATE_BUCKET_STARTED,
});

const createBucketSuccess = (bucket) => ({
  type: TYPES.CREATE_BUCKET_SUCCESS,
  bucket,
});

const addToBucketsError = () => ({
  type: TYPES.ADD_TO_BUCKET_ERROR,
  //TODO: Helper method to create meaningful messages based on the error
  error: "Unable to add to bucket",
});

const addToBucketStarted = () => ({
  type: TYPES.ADD_TO_BUCKET_STARTED,
});

const addToBucketSuccess = (buckets) => ({
  type: TYPES.ADD_TO_BUCKET_SUCCESS,
  buckets,
});

const BucketActions = {
  getBucketsError,
  getBucketsStarted,
  getBucketsSuccess,
  createBucketError,
  createBucketStarted,
  createBucketSuccess,
  addToBucketsError,
  addToBucketStarted,
  addToBucketSuccess,
};

export default BucketActions;
