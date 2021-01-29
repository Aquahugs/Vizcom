import PROFILE_TYPES from './profile.types';

const initialState = {
    user: '',
    userPhoto: '',
    userBio: '',
    buckets: [],
    collection: []
};

const profileReducer = (state = initialState, {type, payload}) => {
    // eslint-disable-next-line default-case
    switch (type) {
        case PROFILE_TYPES.SET_USER : {
            return {
                ...state,
                user: payload.user
            }
        }
        default:
            return state;
    }
};

export default profileReducer;