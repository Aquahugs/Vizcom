/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable */
import axios from "axios";

const apiUploadClient = axios.create({
  baseURL: `${process.env.REACT_APP_API_BASE_URL.replace(/\/$/, "")}/`,
  withCredentials: false,
  headers: {
    "Content-type": "multipart/form-data",
  },
});

const renderImage = async (req) => {
  try {
    return axios
      .post("http://localhost:5000/gen", req.formData, {
        responseType: "arraybuffer",
      })
      .then((response) => {
        let binary = new Uint8Array(response.data);
        console.log(binary);
        var fd = new FormData();
        fd.append("file", new Blob([binary.buffer]));
        uploadRender(fd).then((resp) => {
          console.log(resp);
        });
        let image = btoa(
          new Uint8Array(response.data).reduce(
            (data, byte) => data + String.fromCharCode(byte),
            ""
          )
        );
        console.log(image);
        return `data:${response.headers[
          "content-type"
        ].toLowerCase()};base64,${image}`;
      });
  } catch (error) {
    console.log(error);
  }
};

const uploadRender = async (req) => {
  console.log(req);
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
