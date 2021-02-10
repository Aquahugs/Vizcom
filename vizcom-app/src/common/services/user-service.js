/* eslint-disable import/no-anonymous-default-export */
import apiClient from "./api";

export default {
  getAPI() {
    return apiClient.get("/api/v1/users", {});
  },
  createCampaign(campaign) {
    return apiClient("v2").post("/Campaign/Insert", campaign);
  },
  getCampaign(id) {
    return apiClient("v2").post(`/Campaign/Get?id=${id}`);
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
