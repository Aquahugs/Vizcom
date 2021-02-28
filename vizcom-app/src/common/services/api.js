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

apiClient.interceptors.request.use(
  async (config) => {
    console.log(`Bearer ${window.localStorage.bearer}`);
    config.headers.authorization = `Bearer ${window.localStorage.bearer}`;
    return config;
  },
  (error) => Promise.reject(error)
);

export default apiClient;
