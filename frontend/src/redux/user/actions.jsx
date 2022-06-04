import { signInUser } from "../../service/service";
import { USER_SIGNIN_FAIL, USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS, USER_SIGNOUT } from "./types"


export const actionSignInUser = (email, password) => async (dispatch) => {
    dispatch({type: USER_SIGNIN_REQUEST, payload: {email, password}});
    try {
        const data = await signInUser(email, password);
        dispatch({type: USER_SIGNIN_SUCCESS, payload: data});
        localStorage.setItem('userInfo', JSON.stringify(data));
    } catch (error) {
        dispatch({type: USER_SIGNIN_FAIL, payload: error.message})
    }  
}

export const actionSignOut = (dispatch) => {
    localStorage.removeItem('userInfo');
    dispatch({type:USER_SIGNOUT});
}