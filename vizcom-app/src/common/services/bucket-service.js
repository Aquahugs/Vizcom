/* eslint-disable import/no-anonymous-default-export */
import apiClient from "./api";

export default {
  getBuckets(uid) {
    return apiClient.get(`/api/bucket/get/all`, uid);
  },

  addToBucket(image) {
    return apiClient.post(`/api/bucket/add`, image)
  },

  // expecting this object
  //   {
  //     "uuid": "9hRzb2ZXtBhrovvMIROk3hvZBZp2",
  //     "generated_image_id": 30,
  //     "user_uploaded_image_id": null
  //   }
  createBucket(bucket) {
    return apiClient.post(`/api/bucket/create`, bucket);
  },
};
