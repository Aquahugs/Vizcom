/* eslint-disable import/no-anonymous-default-export */
import apiClient from "./api";

export default {
  // {
  //     is_image: true,
  //     description: '',
  //     uuid: '',
  //     collection_image_id: 1, //optional
  //     bucket_id: 1, //optional
  // }
  postFeedItem(item) {
    return apiClient.post(`/api/explore/feed/item`, item);
  },
  getFeed() {
    return apiClient.get(`/api/explore/feed`);
  },
  deleteFeedItem(id) {
    return apiClient.post(`/api/explore/feed/item/delete`, id);
  },
};
