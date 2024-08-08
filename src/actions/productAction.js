import axios from "axios";
import {
    ADD_CART_SUCCESS,
    ALL_PRODUCT_FAIL,
    ALL_PRODUCT_REQUEST,
    ALL_PRODUCT_SUCCESS,
    REMOVE_FROM_CART
} from "../constants/productConstants";

export const getAllProducts = () => async (dispatch) => {
    try {
        dispatch({ type: ALL_PRODUCT_REQUEST })
        const { data } = await axios.get('https://dummyjson.com/products')

        dispatch({
            type: ALL_PRODUCT_SUCCESS, payload: data,
        })
    } catch (error) {
        dispatch({ type: ALL_PRODUCT_FAIL, payload: error.response.data.message, });
    }
}
export const addToCart = (product) => async (dispatch) => {

    console.log('called')
    let cart = localStorage.getItem('cartItems')
        ? JSON.parse(localStorage.getItem('cartItems'))
        : [];

    console.log(cart)
    cart.push(product);
    console.log(cart)

    console.log('added in cart')
    localStorage.setItem('cartItems', JSON.stringify(cart));
    dispatch({ type: ADD_CART_SUCCESS, payload: product })
}

export const removeFromCart = (productId) => async (dispatch) => {
    console.log(productId)
    let cart = localStorage.getItem('cartItems')
        ? JSON.parse(localStorage.getItem('cartItems'))
        : [];

        
    cart = cart.filter(item=>item.id!==productId);

    localStorage.setItem('cartItems', JSON.stringify(cart));
    dispatch({ type: REMOVE_FROM_CART, payload: productId });

}
