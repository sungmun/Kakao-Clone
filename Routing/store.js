import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import index from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";
const composeEnhancers = composeWithDevTools({ realtime: true, port: 3000 });
// const finalCreateStore = applyMiddleware(thunk)(createStore);
export default initalState =>
    createStore(index, initalState, composeEnhancers(applyMiddleware(thunk)));
