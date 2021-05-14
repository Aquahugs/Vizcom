import TYPES from "./types";

const getExploreFeedError = () => ({
  type: TYPES.GET_EXPLORE_FEED_ERROR,
  //TODO: Helper method to create meaningful messages based on the error
  error: "Unable to get Explore feed",
});

const getExploreFeedStarted = () => ({
  type: TYPES.GET_EXPLORE_FEED_STARTED,
});

const getExploreFeedSuccess = (exploreFeed) => ({
  type: TYPES.GET_EXPLORE_FEED_SUCCESS,
  exploreFeed,
});

const ExploreActions = {
  getExploreFeedError,
  getExploreFeedStarted,
  getExploreFeedSuccess,
};

export default ExploreActions;
