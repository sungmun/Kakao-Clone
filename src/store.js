import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import index from "./reducers";
const finalCreateStore = applyMiddleware(thunk)(createStore);
export default initalState => finalCreateStore(index, initalState);
