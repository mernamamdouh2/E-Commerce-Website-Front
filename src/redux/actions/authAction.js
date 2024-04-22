import { CREATE_NEW_USER, FORGET_PASSWORD, GET_CURRENT_USER, LOGIN_USER, RESET_PASSWORD, UPDATE_USER_PASSWORD, UPDATE_USER_PROFILE, VERIFY_PASSWORD } from '../type'

import { useGetDataToken } from './../../hooks/useGetData';
import { useInsertData } from '../../hooks/useInsertData'
import { useUpdateData } from '../../hooks/useUpdateData';

//create new user 
export const createNewUser = (data) => async (dispatch) => {
    try {
        const response = await useInsertData(`/api/v1/auth/signup`, data);
        dispatch({
            type: CREATE_NEW_USER,
            payload: response,
            loading: true
        })

    } catch (e) {
        dispatch({
            type: CREATE_NEW_USER,
            payload: e.response,
        })
    }
}

//login  user 
export const loginUser = (data) => async (dispatch) => {
    try {
        const response = await useInsertData(`/api/v1/auth/login`, data);
        dispatch({
            type: LOGIN_USER,
            payload: response,
            loading: true
        })

    } catch (e) {
        dispatch({
            type: LOGIN_USER,
            payload: e.response,
        })
    }
}

//login  user 
export const getLoggedUser = () => async (dispatch) => {
    try {
        const response = await useGetDataToken(`/api/v1/users/getMe`);
        dispatch({
            type: GET_CURRENT_USER,
            payload: response,
            loading: true
        })

    } catch (e) {
        dispatch({
            type: GET_CURRENT_USER,
            payload: e.response,
        })
    }
}



//1-forget  password 
export const forgetPassword = (data) => async (dispatch) => {
    try {
        const response = await useInsertData(`/api/v1/auth/forgotPasswords`, data);
        dispatch({
            type: FORGET_PASSWORD,
            payload: response,
            loading: true
        })

    } catch (e) {
        dispatch({
            type: FORGET_PASSWORD,
            payload: e.response,
        })
    }
}

//2-verify  password 
export const verifyPassword = (data) => async (dispatch) => {
    try {
        const response = await useInsertData(`/api/v1/auth/verifyResetCode`, data);
        dispatch({
            type: VERIFY_PASSWORD,
            payload: response,
            loading: true
        })

    } catch (e) {
        dispatch({
            type: VERIFY_PASSWORD,
            payload: e.response,
        })
    }
}

//2-reset  password 
export const resetPassword = (data) => async (dispatch) => {
    try {
        const response = await useUpdateData(`/api/v1/auth/resetPassword`, data);
        dispatch({
            type: RESET_PASSWORD,
            payload: response,
            loading: true
        })

    } catch (e) {
        dispatch({
            type: RESET_PASSWORD,
            payload: e.response,
        })
    }
}



//update  user data 
export const updateUserProfileData = (body) => async (dispatch) => {
    try {
        const response = await useUpdateData(`/api/v1/users/updateMe`, body);
        dispatch({
            type: UPDATE_USER_PROFILE,
            payload: response,
            loading: true
        })

    } catch (e) {
        dispatch({
            type: UPDATE_USER_PROFILE,
            payload: e.response,
        })
    }
}

//update  user password
export const updateUserPassword = (body) => async (dispatch) => {
    try {
        const response = await useUpdateData(`/api/v1/users/changeMyPassword`, body);
        dispatch({
            type: UPDATE_USER_PASSWORD,
            payload: response,
            loading: true
        })

    } catch (e) {
        dispatch({
            type: UPDATE_USER_PASSWORD,
            payload: e.response,
        })
    }
}