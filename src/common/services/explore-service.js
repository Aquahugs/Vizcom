/* eslint-disable import/no-anonymous-default-export */
import apiClient from "./api";

export default {
  getCollectionByUserId(uid) {
    return apiClient.get(`/api/user/id/${uid}/collection`);
  },

  // expecting this object
  //   {
  //     "uuid": "9hRzb2ZXtBhrovvMIROk3hvZBZp2",
  //     "generated_image_id": 30,
  //     "user_uploaded_image_id": null
  //   }
  collectImage(req) {
    return apiClient.post(`/api/user/collection`, req);
  },
  deleteCollectionImage(req) {
    return apiClient.post(`/api/user/collection/image`, req);
  },
};
