import { GET_CIT_CLIENTE, SET_LOG_IN_CIT_CLIENTE, SET_LOG_OUT_CIT_CLIENTE } from "../Types"

const CitClienteReducer = (state, action) => {

    const { type, payload } = action;

    switch (type) {
        case GET_CIT_CLIENTE:
            return {
                ...state,
                isLogged: true,
                username: payload.username,
            };
        case SET_LOG_IN_CIT_CLIENTE:
            return {
                ...state,
                isLogged: true,
                username: payload.username,
            };
        case SET_LOG_OUT_CIT_CLIENTE:
            return {
                ...state,
                isLogged: false,
                username: null,
            };
        default:
            return state;
    }

}

export default CitClienteReducer
