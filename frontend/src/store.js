import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import rootReducer from "./reducers/rootReducer";

// debugger;
const store = createStore(rootReducer, {}, applyMiddleware(logger, thunk));
console.log(store.getState(), "STORE");
export default store;
