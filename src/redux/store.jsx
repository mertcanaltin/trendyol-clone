import { createStore, applyMiddleware, combineReducers } from "redux";
import thunkMiddleware from "redux-thunk";
import promiseMiddleware from "redux-promise-middleware";
import shoppingCart from "./reducers/shoppingCart";

const bindMiddleware = (middleware) => {
  if (process.env.NODE_ENV !== "production") {
    const { composeWithDevTools } = require("redux-devtools-extension");
    const { logger } = require("redux-logger");
    return composeWithDevTools(applyMiddleware(...middleware, logger));
  }
  return applyMiddleware(...middleware);
};

const combinedReducer = combineReducers({
  shoppingCart: shoppingCart,
});

const store = createStore(
  combinedReducer,
  bindMiddleware([thunkMiddleware, promiseMiddleware])
);

export default store;
