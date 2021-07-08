import reduxThunk from "redux-thunk";
import { applyMiddleware, createStore } from "redux";
import { combineReducers } from "redux-immutable";
import recommendReducer from "./recommend/reducer.js";

const allReducers = combineReducers({ recommendReducer });
const store = createStore(allReducers, applyMiddleware(reduxThunk));

export default store;
