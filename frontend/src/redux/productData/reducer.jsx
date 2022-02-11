import {
  PRODUCTS_DATA_REQUEST,
  PRODUCTS_DATA_SUCCESS,
  PRODUCTS_DATA_FAIL,
} from "./types";

const initialState = {
  loading: true,
  data: [],
  error: "",
};

const reducerProducts = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCTS_DATA_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case PRODUCTS_DATA_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case PRODUCTS_DATA_FAIL:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducerProducts;
