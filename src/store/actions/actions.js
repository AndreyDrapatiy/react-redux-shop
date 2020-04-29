import instance from "../../axios";


export const LOAD_ITEMS = 'LOAD_ITEMS';
export const LOAD_SINGLE = 'LOAD_SINGLE';
export const ADD_TO_CART = 'ADD_TO_CART';
export const SET_IN_CART_STATE = 'SET_IN_CART_STATE';
export const IS_LOADED = 'IS_LOADED';
export const FAIL_LOAD = 'FAIL_LOAD';



export const is_loaded = (res) => {
    return{
        type: IS_LOADED,
        result: res
    }
};

export const fail_load = (res) => {
    return{
        type: FAIL_LOAD,
        result: res
    }
};

export const save_loaded_items = (res) => {
    return {
        type: LOAD_ITEMS,
        result: res,
    }
};

export const load_items = () => {
    return dispatch => {
        instance.get('/data.json')
            .then(response => {
                dispatch(save_loaded_items(response.data));
                dispatch(is_loaded(true))
            })
            .catch(err => console.log(err));
            dispatch(fail_load(true))
    }
};

export const add_to_cart = (item) => {
    return {
        type: ADD_TO_CART,
        result: item
    }
};

// export const set_in_cart_state = (id) => {
//     return{
//         type: SET_IN_CART_STATE,
//         result: id
//     }
// };
