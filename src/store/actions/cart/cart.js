import * as actionTypes from '../actionTypes';
import axios from "../../../axios";


export const get_cart_items = () => {
    return {
        type: actionTypes.GET_CART_ITEMS,
    }
};


export const add_to_cart = (token, userId, cart, currentItem) => {
    return dispatch => {

        let data = [...cart, currentItem];
        let ids = []

        for (let i = 0; i < data.length; i++) {
            ids = [...ids, data[i][1]]
        }

        axios.put('cart/' + userId + '.json?auth=' + token, data)

            .then(
                dispatch(update_cart(data)),
                dispatch(update_cart_ids(ids)),
            )
            .catch(err => {
                console.log(err)
            })
    }
}

export const cart_check_state = () => {
    return dispatch => {
        const token = localStorage.getItem('token');
        if (token) {
            const userId = localStorage.getItem('userId');

            axios.get('/cart/' + userId + '.json')
                .then(response => {
                    if (response.data) {
                        dispatch(update_cart(response.data))
                        let ids = []
                        for (let i = 0; i < response.data.length; i++) {
                            ids = [...ids, response.data[i][1]]
                        }
                        dispatch(update_cart_ids(ids))

                    }
                })
                .catch(err => console.log(err));
        }
    };
};

export const update_cart = (item) => {
    return {
        type: actionTypes.UPDATE_CART,
        result: item
    }
};

export const update_cart_ids = (ids) => {
    return {
        type: actionTypes.UPDATE_CART_IDS,
        result: ids
    }
};

