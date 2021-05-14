import TYPES from "./types";

const setCurrentBucket = (currentBucket) => ({
  type: TYPES.SET_CURRENT_BUCKET,
  currentBucket,
});

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

const getBucketDropdownOptions = (bucketOptions) => ({
  type: TYPES.GET_BUCKETS_DROPDOWN_OPTIONS,
  bucketOptions,
});

const createBucketError = () => ({
  type: TYPES.CREATE_BUCKET_ERROR,
  //TODO: Helper method to create meaningful messages based on the error
  error: "Unable to create bucket",
});

const createBucketStarted = () => ({
  type: TYPES.CREATE_BUCKET_STARTED,
});

const createBucketSuccess = (buckets) => ({
  type: TYPES.CREATE_BUCKET_SUCCESS,
  buckets,
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

const deleteBucketError = () => ({
  type: TYPES.DELETE_BUCKET_ERROR,
  //TODO: Helper method to create meaningful messages based on the error
  error: "Unable delete Bucket",
});

const deleteBucketStarted = () => ({
  type: TYPES.DELETE_BUCKET_STARTED,
});

const deleteBucketSuccess = (buckets) => ({
  type: TYPES.DELETE_BUCKET_SUCCESS,
  buckets,
});

const deleteBucketImageError = () => ({
  type: TYPES.DELETE_BUCKET_ERROR,
  //TODO: Helper method to create meaningful messages based on the error
  error: "Unable delete Bucket Image",
});

const deleteBucketImageStarted = () => ({
  type: TYPES.DELETE_BUCKET_IMAGE_STARTED,
});

const deleteBucketImageSuccess = (buckets) => ({
  type: TYPES.DELETE_BUCKET_IMAGE_SUCCESS,
  buckets,
});

const updateBucketError = () => ({
  type: TYPES.UPDATE_BUCKET_ERROR,
  error: "Unable to update bucket",
});

const updateBucketStarted = () => ({
  type: TYPES.UPDATE_BUCKET_STARTED,
});

const updateBucketSuccess = (buckets) => ({
  type: TYPES.UPDATE_BUCKET_SUCCESS,
  buckets,
});

const BucketActions = {
  updateBucketError,
  updateBucketStarted,
  updateBucketSuccess,
  setCurrentBucket,
  getBucketsError,
  getBucketsStarted,
  getBucketsSuccess,
  createBucketError,
  createBucketStarted,
  createBucketSuccess,
  addToBucketsError,
  addToBucketStarted,
  addToBucketSuccess,
  getBucketDropdownOptions,
  deleteBucketError,
  deleteBucketStarted,
  deleteBucketSuccess,
  deleteBucketImageError,
  deleteBucketImageStarted,
  deleteBucketImageSuccess,
};

export default BucketActions;
