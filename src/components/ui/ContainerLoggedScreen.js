import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Container } from '@mui/material'

import CitClienteContext from '../../context/citcliente/CitClienteContext'

import commonSX from '../../theme/CommonSX'


const ContainerLoggedScreen = (props) => {

    // Obtener el contexto del cliente
    const { isLogged, username } = useContext(CitClienteContext)
    console.log(isLogged, username)

    // Redirigir al login cuando NO haya iniciado sesion
    const navigate = useNavigate()
    useEffect(() => {
        if (!isLogged) {
            navigate('/login')
        }
    })

    if (isLogged) {
        return (
            <Container sx={commonSX.container}>
                {props.children}
            </Container>
        )
    } else {
        return null
    }

}

export default ContainerLoggedScreen
