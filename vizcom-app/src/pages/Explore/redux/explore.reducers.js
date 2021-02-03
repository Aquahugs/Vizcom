import EXPLORE_TYPE from "./explore.types";

const initialState = {
  feedImages: [],
  boards: [],
};

const exploreReducer = (state = initialState, { type, payload }) => {
  // eslint-disable-next-line default-case
  switch (true) {
    default:
      // need this for default case
      return state;
  }
};

export default exploreReducer;
