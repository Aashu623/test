import {
    ALL_PRODUCT_FAIL,
    ALL_PRODUCT_SUCCESS,
    ALL_PRODUCT_REQUEST,
    CLEAR_ERRORS,
    ADD_CART_SUCCESS,
    REMOVE_FROM_CART
} from "../constants/productConstants";

export const productReducer = (state = { products: [] }, action) => {
    switch (action.type) {
        case ALL_PRODUCT_REQUEST:
            return {
                loading: true,
                products: [],
            };
        case ALL_PRODUCT_SUCCESS:
            return {
                loading: false,
                products: action.payload.products,
            };

        case ALL_PRODUCT_FAIL:
            return {
                loading: false,
                error: action.payload,
            };
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null,
            };
        default:
            return state;
    }
};


export const cartReducer = (state = { cart: [] }, action) => {
    switch (action.type) {

        case ADD_CART_SUCCESS:
            const product = action.payload;

            const isItemExist = state.cartItems.find((i) => i.product === product);

            if (isItemExist) {
                return {
                    ...state,
                    cartItems: state.cartItems.map((item) => item === product ? product : item),
                };
            }
            else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, product]
                }
            }

        case REMOVE_FROM_CART:
            console.log(state.cartItems)
            return {
                ...state,
                cartItems: state.cartItems.filter(item => item.id !== action.payload.productId),
            };
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null,
            };
        default:
            return state;
    }
};
