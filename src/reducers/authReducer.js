import { types } from "../types/types";

const initialState = {

    isAuthenticated: false,
    token: '',
    username: '',

}

export const authReducer = ( state = initialState, action ) => {

    switch (action.type) {
        case types.SET_LOG_IN_CIT_CLIENTE:
            return {
                ...action.payload
            }
        case types.SET_LOG_OUT_CIT_CLIENTE:
            return {  ...initialState } 
        default:
            return state;
    }
    
}