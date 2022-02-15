import { CART_DATA_REQUEST, ADD_CART_DATA, REMOVE_CART_DATA } from "./types";
import { getSingleProduct } from "../../service/service";

export const actionAddCartData = (id, qty) => async (dispatch) => {
  dispatch({ type: CART_DATA_REQUEST });
  const { data } = await getSingleProduct(id);
  dispatch({
    type: ADD_CART_DATA,
    payload: {
      name: data.name,
      image: data.image,
      price: data.price,
      inStock: data.inStock,
      productId: data._id,
      qty: qty,
    },
  });
};

export const actionRemoveCartData = (id) => (dispatch) => {
  dispatch({ type: REMOVE_CART_DATA, payload: id });
};
