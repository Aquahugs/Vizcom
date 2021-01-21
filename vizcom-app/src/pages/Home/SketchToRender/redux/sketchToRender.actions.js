import ACTION_TYPES from './profile.types';

// where we call api logic and such
export const serUser = (user) => (dispatch) => {
    dispatch({
        types: ACTION_TYPES.SET_USER,
        payload: user,
    });
}