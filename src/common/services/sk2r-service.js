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
      .post("https://www.jordobranch.io/gen", req.formData, {
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

const addInvites = async (req) => {
  return apiUploadClient.post(`/api/sk2r/invites`, req);
};

const addBulkInvites = async (req) => {
  return apiUploadClient.post(`/api/sk2r/invites/bulk`, req);
};

const getInvites = async (req) => {
  return apiUploadClient.get(`/api/sk2r/invites/${req.id}`);
};

const redeemInvite = async (req) => {
  return apiUploadClient.post(`/api/sk2r/invite/redeem`, req);
};

const getAccessById = async (req) => {
  return apiUploadClient.post(`/api/sk2r/access`, req);
};

const isAccessValid = async (invite_id) => {
  return apiUploadClient.get(`/api/sk2r/access/valid/${invite_id}`);
};

export default {
  addBulkInvites,
  renderImage,
  uploadRender,
  uploadPrerender,
  insertImages,
  addInvites,
  getInvites,
  redeemInvite,
  getAccessById,
  isAccessValid,
};
