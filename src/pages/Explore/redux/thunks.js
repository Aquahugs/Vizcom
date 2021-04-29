import actions from "./actions";
import exploreService from "../../../../common/services/explore-service";

const getExploreFeed = () => async (dispatch) => {
  dispatch(actions.getExploreFeedStarted());
  try {
    const response = await exploreService.getFeed();
    dispatch(actions.getExploreFeedSuccess(response.data));
  } catch (error) {
    dispatch(actions.getExploreFeedError(error));
  }
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getExploreFeed,
};
