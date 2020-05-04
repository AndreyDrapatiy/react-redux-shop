import * as actionTypes from '../actionTypes';

export const get_cart_items = () => {
    return {
        type: actionTypes.GET_CART_ITEMS,
    }
};

export const add_to_cart = (item) => {
    return {
        type: actionTypes.ADD_TO_CART,
        result: item
    }
};
