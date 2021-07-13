/* eslint-disable import/no-anonymous-default-export */
import apiClient from "./api";

export default {
  createUser(user) {
    return apiClient.post("api/user/create", user);
  },
  getUserById(uid) {
    return apiClient.get(`/api/user/id/${uid}`);
  },
  updateUser(user, uid) {
    // dont pass in the id
    return apiClient.patch(`/api/user/update/id/${uid}`, user);
  },
  sk2rBetaAccess(user) {
    return apiClient.post("api/user/admin/sk2r-beta", user);
  },
};
