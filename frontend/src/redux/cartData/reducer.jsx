import { CART_DATA_REQUEST, ADD_CART_DATA, REMOVE_CART_DATA } from "./types";

const initialState = {
  loading: true,
  data: [],
};

const reducerCartData = (state = initialState, action) => {
  switch (action.type) {
    case CART_DATA_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ADD_CART_DATA:
      const item = action.payload;
      const existItem = state.data.find((x) => x.productId === item.productId);
      if (existItem) {
        return {
          loading: false,
          data: state.data.map((x) =>
            x.productId === item.productId ? item : x
          ),
        };
      } else {
        return {
          loading: false,
          data: [...state.data, item],
        };
      }
    case REMOVE_CART_DATA:
      return {
        loading: false,
        data: state.data.filter((x) => {
          if (x.productId !== action.payload) {
            return x;
          }
        }),
      };
    default:
      return state;
  }
};

export default reducerCartData;
