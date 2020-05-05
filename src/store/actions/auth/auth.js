import axios from "../../../axios";
import * as actionTypes from '../actionTypes';

export const auth_start = () => {
    return {
        type: actionTypes.AUTH_START,
    }
};

export const auth_success = (data) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        authData: data
    }
};

export const auth_fail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    }
};

export const logout = () => {
    return {
        type: actionTypes.AUTH_LOGOUT
    }
}

export const checkAuthTimeout = (expirationTime) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout())
        }, expirationTime*1000)
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

        axios.post(method ? signUpUrl : signInUrl, authData)
            .then(response => {
                dispatch(auth_success(response.data))
                dispatch(checkAuthTimeout(response.data.expiresIn))
            })
            .catch(err => {
                dispatch(auth_fail(err.response.data.error.message))
            })
    }
};
