import * as actionTypes from '../actions/actionTypes';

const initialState = {
    items: null,
    single: null,
    isLoaded: false,
    failLoad: false,
    cart: [],
    user: {
        token: null,
        userId: null,
        error: null,
        loading: false
    }
};

const reducer = (state = initialState, action) => {
    switch (action.type) {

        case actionTypes.AUTH_START: {
            return {
                ...state,
                user: {...{ error: null, loading: true}}
            }
        }

        case actionTypes.AUTH_SUCCESS: {
            return {
                ...state,
                user: {...{token: action.authData.idToken, userId: action.authData.localId, error: null, loading: false}}
            }
        }

        case actionTypes.AUTH_FAIL: {
            return {
                ...state,
                user: {...{error: action.error, loading: false, userId: null}
                }
            }
        }

        case actionTypes.AUTH_LOGOUT: {
            return {
                ...state,
                user: {...{token: null, userId: null}
                }
            }
        }

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