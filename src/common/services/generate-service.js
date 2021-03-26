/* eslint-disable import/no-anonymous-default-export */
import apiClient from "./api";

export default {
  getGeneratedImages() {
    return apiClient.get(`/api/generate/get/all`);
  },
};
