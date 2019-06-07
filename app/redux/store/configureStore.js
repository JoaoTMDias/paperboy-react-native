// Libraries
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { autoRehydrate } from "redux-persist";

// Reducers
import rootReducer from "../reducers";

const middlewares = [thunk];

/**
 * Configures the Redux store with the state from the reducers.
 * It also enables the React Native Debugger tools
 *
 * @export configureStore()
 * @returns createStore
 */
export default function configureStore() {
  return createStore(rootReducer, undefined, composeWithDevTools(applyMiddleware(...middlewares), autoRehydrate()));
}
