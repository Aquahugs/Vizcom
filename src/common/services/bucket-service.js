/* eslint-disable import/no-anonymous-default-export */
import apiClient from "./api";

export default {
  getBuckets(uid) {
    return apiClient.get(`/api/bucket/${uid}/get/all`);
  },
  getBucket(bucket_id) {
    return apiClient.get(`/api/bucket/${bucket_id}/get/one`);
  },

  addToBucket(image) {
    return apiClient.post(`/api/bucket/add`, image);
  },

  // expecting this object
  //   {0
  //     "generated_image_id": 30,
  //     "user_uploaded_image_id": null
  //   }
  createBucket(bucket) {
    return apiClient.post(`/api/bucket/create`, bucket);
  },

  deleteBucket(bucket) {
    return apiClient.post(`/api/bucket/`, bucket);
  },

  deleteBucketImage(bucketImage) {
    return apiClient.post(`/api/bucket/image`, bucketImage);
  },
  updateBucket(bucket) {
    return apiClient.patch(`/api/bucket/update/id/${bucket.bucket_id}`, bucket);
  },
};
