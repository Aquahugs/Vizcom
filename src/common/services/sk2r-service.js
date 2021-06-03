/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable */
import axios from "axios";

const apiUploadClient = axios.create({
  baseURL: `${process.env.REACT_APP_API_BASE_URL.replace(/\/$/, "")}/`,
  withCredentials: false,
});

const renderImage = async (req) => {
  try {
    return axios.post("http://localhost:5000/gen", req.formData);
  } catch (error) {
    console.log(error);
  }
};

const uploadRender = async (req) => {
  return apiUploadClient.post(`/api/sk2r/upload/render`, req);
};
const uploadPrerender = async (req) => {
  return apiUploadClient.post(`/api/sk2r/upload/prerender`, req.formData);
};

const insertImages = async (req) => {
  return apiUploadClient.post(`/api/sk2r/insert`);
};

export default {
  renderImage,
  uploadRender,
  uploadPrerender,
  insertImages,
};
