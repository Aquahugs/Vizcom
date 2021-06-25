/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable */
import axios from "axios";

const apiUploadClient = axios.create({
  baseURL: `${process.env.REACT_APP_API_BASE_URL.replace(/\/$/, "")}/`,
  withCredentials: false,
});

const renderImage = async (req) => {
  try {
    return axios
      .post("http://jordobranch.io:5000/gen", req.formData, {
        responseType: "arraybuffer",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        // TODO
        // let binary = new Uint8Array(response.data);
        // console.log(binary);
        // var fd = new FormData();
        // fd.append("file", new Blob([binary.buffer]));
        // uploadRender(fd).then((resp) => {
        //   console.log(resp);
        // });
        let image = btoa(
          new Uint8Array(response.data).reduce(
            (data, byte) => data + String.fromCharCode(byte),
            ""
          )
        );
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
  return apiUploadClient.post(`/api/sk2r/insert`, req);
};

export default {
  renderImage,
  uploadRender,
  uploadPrerender,
  insertImages,
};
