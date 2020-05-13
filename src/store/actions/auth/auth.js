import axios from "../../../axios";
import * as actionTypes from '../actionTypes';
import {cart_check_state} from '../index'


export const auth_start = () => {
    return {
        type: actionTypes.AUTH_START,
    }
};

export const auth_success = (token, userId) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        idToken: token,
        userId: userId
    }
};

export const auth_fail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    }
};

export const logout = () => {

    localStorage.removeItem('token');
    localStorage.removeItem('userId');

    return {
        type: actionTypes.AUTH_LOGOUT
    }
}

export const check_auth_timeout = (expirationTime) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout())
        }, expirationTime * 1000)
    }
}

export const auth = (email, password, method) => {
    return dispatch => {
        dispatch(auth_start());

        const authData = {
            email: email,
            password: password,
            returnSecureToken: true
        }

        let signInUrl = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCEs2YGKYKDVOl2y500M0Nbpm9LQlbPuEM'
        let signUpUrl = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCEs2YGKYKDVOl2y500M0Nbpm9LQlbPuEM'

        axios.post(method ? signInUrl : signUpUrl, authData)
            .then(response => {
                localStorage.setItem('token', response.data.idToken);
                localStorage.setItem('userId', response.data.localId);
                dispatch(auth_success(response.data.idToken, response.data.localId))
                dispatch(check_auth_timeout(response.data.expiresIn))
                dispatch(cart_check_state())
            })

            .catch(err => {
                dispatch(auth_fail(err.response.data.error.message))
            })
    }
};

export const auth_check_state = () => {
    return dispatch => {
        const token = localStorage.getItem('token');
        if (!token) {
            dispatch(logout());
        }  else {
                const userId = localStorage.getItem('userId');
                dispatch(auth_success(token, userId));
        }
    };
};