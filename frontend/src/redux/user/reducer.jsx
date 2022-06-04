import { USER_SIGNIN_FAIL, USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS, USER_SIGNOUT } from "./types";


const initialState = {
    loading: false,
    userInfo: localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null,
    error: "",
};

const reducerSignInUser = (state = initialState, action) => {
    switch (action.type) {
        case USER_SIGNIN_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case USER_SIGNIN_SUCCESS:
            return {
                loading: false,
                userInfo: action.payload,
                error: "",
            }
        case USER_SIGNIN_FAIL:
            return {
                loading: false,
                userInfo: null,
                error: action.payload, 
            }
        case USER_SIGNOUT:
            return {
                loading: false,
                userInfo: null,
                error: "",
            }
        default:
            return state;
    }
}

export default reducerSignInUser;