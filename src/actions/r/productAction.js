import axios from "axios";
import { ALL_PRODUCT_FAIL, ALL_PRODUCT_REQUEST, ALL_PRODUCT_SUCCESS } from "../../constants/productConstants";

export const getAllProducts = () => async (dispatch) => {
    try {
        dispatch({ type: ALL_PRODUCT_REQUEST })
        const { data } = await axios.get('https://dummyjson.com/products')
        console.log(data)
        dispatch({
            type: ALL_PRODUCT_SUCCESS, payload: data,
        })
    } catch (error) {
        dispatch({ type: ALL_PRODUCT_FAIL, payload: error.response.data.message, });
    }
}