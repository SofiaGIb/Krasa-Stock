import { createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import Reducer from "./Reducer/reducer";

const store = createStore(Reducer, applyMiddleware(thunk));
export default store;
