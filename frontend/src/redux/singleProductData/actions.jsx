import {
  SINGLE_PRODUCT_REQUEST,
  SINGLE_PRODUCT_FAIL,
  SINGLE_PRODUCT_SUCCESS,
} from "./types";
import { getSingleProduct } from "../../service/service";

export const actionsGetSingleProduct = (id) => async (dispatch) => {
  dispatch({ type: SINGLE_PRODUCT_REQUEST });
  try {
    const data = await getSingleProduct(id);
    dispatch({ type: SINGLE_PRODUCT_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: SINGLE_PRODUCT_FAIL, payload: error.message });
  }
};
