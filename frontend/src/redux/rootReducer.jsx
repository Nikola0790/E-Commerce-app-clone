import { combineReducers } from "redux";
import reducerSingleProduct from "./singleProductData/reducer";
import reducerProduct from "./productData/reducer";
import reducerCartData from "./cartData/reducer";
import { reducerSignInUser, reducerRegisterUser } from "./user/reducer";

const rootReducer = combineReducers({
  allProducts: reducerProduct,
  singleProduct: reducerSingleProduct,
  cartData: reducerCartData,
  userSignIn: reducerSignInUser,
  userRegister: reducerRegisterUser,
});

export default rootReducer;
