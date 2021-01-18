import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import explore from './Reducers/explore-reducer'
import sketchToRender from './Reducers/sketch-to-render-reducer'
import profile from './Reducers/profile-reducer'
import generate from './Reducers/generate-reducer'


const root = combineReducers({
    explore,
    sketchToRender,
    profile,
    generate,
})

const store = createStore(root, applyMiddleware(thunk))
export default store