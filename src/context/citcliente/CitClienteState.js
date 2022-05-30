import React, { useReducer } from "react"

import CitClienteContext from "./CitClienteContext"
import CitClienteReducer from "./CitClienteReducer"

const CitClienteState = (props) => {

    const initialState = {
        isLogged: false,
        username: null,
    }

    const [state, dispatch] = useReducer(CitClienteReducer, initialState);

    const getCitCliente = async () => {
        console.log('getCitCliente')
    }

    const setLogInCitCliente = async () => {
        console.log('setLogInCitCliente')
    }

    const setLogOutCitCliente = async () => {
        console.log('setLogOutCitCliente')
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
