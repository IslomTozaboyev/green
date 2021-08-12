import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import reduces from "./reduces";

const store = createStore(
  reduces,
  composeWithDevTools(applyMiddleware(...[thunk]))
);

export default store;
