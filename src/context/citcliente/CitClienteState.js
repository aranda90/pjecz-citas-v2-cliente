import React, { useReducer, useState } from "react"

import { Profile } from '../../actions/AuthActions'

import CitClienteContext from "./CitClienteContext"
import CitClienteReducer from "./CitClienteReducer"


const CitClienteState = (props) => {

    const initialState = {
        isLogged: false,
        username: null,
    }

    const [state, dispatch] = useReducer(CitClienteReducer, initialState);

    const [isLogged, setIsLogged] = useState(false)
    const [username, setUsername] = useState(null)

    const getCitCliente = async () => {
        const response = await Profile()
        setIsLogged((response.status === 200) ? true : false)
        setUsername((response.status === 200) ? response.data.username : null)
        dispatch({
            type: 'GET_CIT_CLIENTE',
            payload: {
                isLogged: isLogged,
                username: username
            }
        })
    }

    const setLogInCitCliente = async () => {
        const response = await Profile()
        setIsLogged((response.status === 200) ? true : false)
        setUsername((response.status === 200) ? response.data.username : null)
        dispatch({
            type: 'SET_LOG_IN_CIT_CLIENTE',
            payload: {
                isLogged: isLogged,
                username: username
            }
        })
    }

    const setLogOutCitCliente = () => {
        setIsLogged(false)
        setUsername(null)
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
