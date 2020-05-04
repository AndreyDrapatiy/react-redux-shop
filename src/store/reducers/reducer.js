import * as actionTypes from '../actions/actionTypes';

const initialState = {
    items: null,
    single: null,
    isLoaded: false,
    failLoad: false,
    cart: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOAD_ITEMS: {
            return {
                ...state,
               items: action.result
            };
        }

        case actionTypes.IS_LOADED: {
            return {
                ...state,
                isLoaded: action.result
            }
        }
        case actionTypes.FAIL_LOAD: {
            return {
                ...state,
                failedLoad: action.result
            }
        }

        case actionTypes.ADD_TO_CART: {
            return {
                ...state,
                cart: state.cart.concat({...state.item, ...action.result})
            }
        }

        case actionTypes.GET_CART_ITEMS: {
            return {
                cartItems: state.cart
            }
        }
    }
    return state;
};

export default reducer;