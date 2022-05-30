import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Container, Typography } from '@mui/material'

import CitClienteContext from '../../context/citcliente/CitClienteContext'

import commonSX from '../../theme/CommonSX'


const CommonScreen = (props) => {

    // Obtener el contexto del cliente
    const { isLogged } = useContext(CitClienteContext)

    // Redirigir al login cuando NO haya iniciado sesion
    //const token = window.localStorage.getItem('token')
    //const navigate = useNavigate()
    //useEffect(() => {
    //    if (!token) {
    //        navigate('/login')
    //    }
    //})

    if (isLogged) {
        return (
            <Container sx={commonSX.container}>
                <Typography variant='h5' sx={commonSX.title}>
                    No ha iniciado su sesion
                </Typography>
            </Container>
        )
    } else {
        return (
            <Container sx={commonSX.container}>
                {props.children}
            </Container>
        )
    }

}

export default CommonScreen
