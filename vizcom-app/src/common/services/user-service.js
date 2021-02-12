/* eslint-disable import/no-anonymous-default-export */
import apiClient from "./api";

export default {
  getAPI(uuid) {
    return apiClient.post("/api/v1/users", uuid);
  },
  createCampaign(campaign) {
    return apiClient("v2").post("/Campaign/Insert", campaign);
  },
  getUser(id) {
    debugger;
    const url = `/api/v1/users/id`;
    return apiClient.post(url, id);
  },
  getVariations(campaignItemId) {
    return apiClient().post(
      `/Variations/GetAll?campaignItemId=${campaignItemId}`
    );
  },
  addUpateVariations(variation) {
    return new Promise(async (resolve, reject) => {
      try {
        if (variation.variation.campaignItemVariationMappingId) {
          await apiClient().post("/Variations/Update", variation);
        } else {
          // This must be a new variation, make the campaignItemVariationMappingId zero
          // as the API requires
          const varitionsWithIdZero = { ...variation };
          varitionsWithIdZero.variation.campaignItemVariationMappingId = 0;
          await apiClient().post("/Variations/Save", varitionsWithIdZero);
        }
        return resolve();
      } catch (error) {
        return reject(error);
      }
    });
  },
};
