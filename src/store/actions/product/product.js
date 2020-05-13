import * as actionTypes from '../actionTypes';
import axios from "../../../axios";

export const is_loaded = (res) => {
    return {
        type: actionTypes.IS_LOADED,
        result: res
    }
};

export const fail_load = (res) => {
    return {
        type: actionTypes.FAIL_LOAD,
        result: res
    }
};

export const save_loaded_items = (res) => {
    return {
        type: actionTypes.LOAD_ITEMS,
        result: res,
    }
};

export const load_items = () => {
    return dispatch => {
        axios.get('/data.json')
            .then(response => {
                dispatch(save_loaded_items(response.data));
                dispatch(is_loaded(true))
            })
            .catch(err => console.log(err));
        dispatch(fail_load(true))
    }
};