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
        // authData: authData
    }
};

export const auth_fail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    }
};

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
                console.log(response.data)
            })
            .catch(err => {
                dispatch(auth_fail(err))
            })
    }
};
