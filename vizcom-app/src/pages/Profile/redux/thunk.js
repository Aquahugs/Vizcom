import actions from "./action";
import apiClient from "../../../common/util/api-client";
import apiEndpoints from "../../../common/constants/api-endpoints";

const getProfile = () => async (dispatch) => {
  dispatch(actions.getProfileStarted());
  try {
    const response = await apiClient.get(apiEndpoints.GET_PROFILE);
    dispatch(actions.getProfileSuccess(response.data));
  } catch (error) {
    dispatch(actions.getProfileError(error));
  }
};

const updateProfile = (profile) => async (dispatch) => {
  dispatch(actions.updateProfileStarted());
  try {
    await apiClient.post(apiEndpoints.POST_PROFILE, profile);
    dispatch(actions.updateProfileSuccess(profile));
  } catch (error) {
    dispatch(actions.updateProfileError(error));
  }
};

export default {
  getProfile,
  updateProfile,
};
