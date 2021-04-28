/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable */
import axios from "axios";

const apiUploadClient = axios.create({
  baseURL: `${process.env.REACT_APP_API_BASE_URL.replace(/\/$/, "")}/`,
  withCredentials: false,
});

export default {
  uploadImages(req) {
    return apiUploadClient.post(`/api/upload/multiple`, req.formData, {
      params: { generated_image_type: req.generated_image_type },
    });
  },
};
