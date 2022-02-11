import {
  SINGLE_PRODUCT_REQUEST,
  SINGLE_PRODUCT_FAIL,
  SINGLE_PRODUCT_SUCCESS,
} from "./types";

const initialState = {
  loading: true,
  data: {},
  error: "",
};

const reducerSingleProduct = (state = initialState, action) => {
  switch (action.type) {
    case SINGLE_PRODUCT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case SINGLE_PRODUCT_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case SINGLE_PRODUCT_FAIL:
      return {
        loading: false,
        data: {},
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducerSingleProduct;
