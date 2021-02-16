/* eslint-disable import/no-anonymous-default-export */
import apiClient from "./api";

export default {
  getCollectionByUserId(uid) {
    return apiClient.get(`/api/user/id/${uid}/collection`);
  },
};
