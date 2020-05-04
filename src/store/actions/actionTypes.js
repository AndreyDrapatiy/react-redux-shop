
export const LOAD_ITEMS = 'LOAD_ITEMS';
export const LOAD_SINGLE = 'LOAD_SINGLE';

export const ADD_TO_CART = 'ADD_TO_CART';
export const GET_CART_ITEMS = 'GET_CART_ITEMS';
export const SET_IN_CART_STATE = 'SET_IN_CART_STATE';

export const IS_LOADED = 'IS_LOADED';
export const FAIL_LOAD = 'FAIL_LOAD';

export const AUTH_START = 'AUTH_START'
export const AUTH_SUCCESS = 'AUTH_SUCCESS'
export const AUTH_FAIL = 'AUTH_FAIL'

//

//

// export const auth_start = () => {
//     return {
//         type: AUTH_START,
//     }
// };
//
// export const auth_success = (data) => {
//     return {
//         type: AUTH_SUCCESS,
//         // authData: authData
//     }
// };
//
// export const auth_fail = (error) => {
//     return {
//         type: AUTH_FAIL,
//         error: error
//     }
// };
//
// export const auth = (email, password) => {
//     return dispatch => {
//         dispatch(auth_start());
//
//         const authData = {
//             email: email,
//             password: password,
//             returnSecureToken: true
//         }
//
//         axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCEs2YGKYKDVOl2y500M0Nbpm9LQlbPuEM', authData)
//             .then(response => {
//                 dispatch(auth_success(response.data))
//                 console.log(response.data)
//             })
//             .catch(err => {
//                 dispatch(auth_fail(err))
//             })
//     }
// };

// export const set_in_cart_state = (id) => {
//     return{
//         type: SET_IN_CART_STATE,
//         result: id
//     }
// };
