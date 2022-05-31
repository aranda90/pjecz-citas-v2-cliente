import React, { useReducer } from "react"

import { Profile } from '../../actions/AuthActions'

import CitClienteContext from "./CitClienteContext"
import CitClienteReducer from "./CitClienteReducer"


const CitClienteState = (props) => {

    const initialState = {
        isLogged: false,
        username: null,
    }

    const [state, dispatch] = useReducer(CitClienteReducer, initialState);

    const getCitCliente = async () => {
        const response = await Profile()
        dispatch({
            type: 'GET_CIT_CLIENTE',
            payload: {
                isLogged: (response.status === 200) ? true : false,
                username: (response.status === 200) ? response.data.username : null
            }
        })
    }

    const setLogInCitCliente = async () => {
        const response = await Profile()
        dispatch({
            type: 'SET_LOG_IN_CIT_CLIENTE',
            payload: {
                isLogged: (response.status === 200) ? true : false,
                username: (response.status === 200) ? response.data.username : null
            }
        })
    }

    const setLogOutCitCliente = () => {
        dispatch({
            type: 'SET_LOG_OUT_CIT_CLIENTE',
            payload: initialState
        })
    }

    return(
        <CitClienteContext.Provider value={{
            isLogged: state.isLogged,
            username: state.username,
            getCitCliente,
            setLogInCitCliente,
            setLogOutCitCliente,
        }}>
            {props.children}
        </CitClienteContext.Provider>
    )

}

export default CitClienteState
