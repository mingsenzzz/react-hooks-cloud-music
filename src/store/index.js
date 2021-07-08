import reduxThunk from "redux-thunk";
import { combineReducers, applyMiddleware, createStore } from "redux";
import recommendReducer from "./recommend/reducer.js";

const allReducers = combineReducers({ recommendReducer });
const store = createStore(allReducers, applyMiddleware(reduxThunk));

export default store;
