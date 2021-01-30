/* eslint-disable */
import axios from "axios";

const apiClient = axios.create({
  baseURL: `${process.env.REACT_APP_API_BASE_URL.replace(/\/$/, "")}/`,
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

// can set up firebase instead of oicdManager
// adding bearer token makes it easier to debug

// apiClient.interceptors.request.use(
//   async (config) => {
//     const accessToken = await oidcManager
//       .getUser()
//       .then((user) => user && user.access_token);
//     config.headers.authorization = `Bearer ${accessToken}`;
//     return config;
//   },
//   (error) => Promise.reject(error)
// );

export default apiClient;
