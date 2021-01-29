import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer from "./rootReducer";
import { loadState, saveState } from "../common/utils/sessionStorage";

const persistedState = loadState();
const middlewares = [thunk];
const store = createStore(
  rootReducer,
  persistedState,
  composeWithDevTools(applyMiddleware(...middlewares))
);

store.subscribe(() => {
  saveState(store.getState());
});

export default store;
