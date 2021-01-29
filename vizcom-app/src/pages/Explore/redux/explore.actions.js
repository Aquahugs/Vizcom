import EXPLORE_TYPES from './explore.types';

// where we call api logic and such
export const getImages = (user) => (dispatch) => {
    dispatch({
        types: EXPLORE_TYPES.SET_USER,
        payload: user,
    });
}