/* eslint-disable import/no-anonymous-default-export */
import apiClient from "./api";

export default {
  uploadImages(files) {
    return apiClient.post(`/api/upload/multiple`, files, {
      onUploadProgress: (progressEvent) => {
        console.log(progressEvent.loaded / progressEvent.total);
      },
    });
  },
};
