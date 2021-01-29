import EXPLORE_TYPE from './explore.types';

const initialState = {
    feedImages: [],
    boards: [],
};

const exploreReducer = (state = initialState, {type, payload}) => {
    // eslint-disable-next-line default-case
    console.log("Hola amigo, here's your state, payload and type");
    console.log(state, type, payload);
    switch (true) {

        default: // need this for default case
          return state 
       }
};

export default exploreReducer;