import { types } from "../types/types";

const initialState = {

    open: false,

}

export const tokenReducer = ( state = initialState, action ) => {

    switch (action.type) {
        case types.TOKEN_EXPIRED:
            return {
                open: true
            }
        case types.TOKEN_EXPIRED_CLEAN:
            return initialState
        default:
            return state;
    }
    
}