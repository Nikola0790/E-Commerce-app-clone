import { PRODUCTS_DATA_REQUEST, PRODUCTS_DATA_SUCCESS, PRODUCTS_DATA_FAIL } from "./types";
import { getAllProducts } from "../../service/service";

export const actionsGetProductsData = () => async (dispatch) => {
    dispatch({type: PRODUCTS_DATA_REQUEST});
    try {
        const data = await getAllProducts();
        dispatch({type: PRODUCTS_DATA_SUCCESS, payload: data});
    } catch (error) {
        dispatch({type: PRODUCTS_DATA_FAIL, payload: error.message});
    }
} 