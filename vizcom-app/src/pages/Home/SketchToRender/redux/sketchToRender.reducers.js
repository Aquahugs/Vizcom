import SKETCH_TO_RENDER_TYPES from './sketchToRender.types';

const initialState = {

};

const sketchToRenderReducer = (state = initialState, {type, payload}) => {
    console.log("Hola amigo, here's your state, payload and type");
    console.log(state, type, payload);
    switch (true) {

        default: // need this for default case
          return state 
       }
};

export default sketchToRenderReducer;

