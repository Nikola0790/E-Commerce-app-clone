import { combineReducers } from "redux";
import reducerSingleProduct from "./singleProductData/reducer";
import reducerProduct from "./productData/reducer";

const rootReducer = combineReducers({
  allProducts: reducerProduct,
  singleProduct: reducerSingleProduct,
});

export default rootReducer;
