import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";
import reducerProducts from "./productData/reducer";

const store = createStore(reducerProducts, composeWithDevTools(applyMiddleware(thunk)));

export default store;