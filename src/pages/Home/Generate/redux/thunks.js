import actions from "./actions";
import generateService from "../../../../common/services/generate-service";

const getGeneratedImages = () => async (dispatch) => {
  dispatch(actions.getGeneratedImagesStarted());
  try {
    const response = await generateService.getGeneratedImages();
    dispatch(actions.getGeneratedImagesSuccess(response.data));
  } catch (error) {
    dispatch(actions.getGeneratedImagesError(error));
  }
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getGeneratedImages,
};
