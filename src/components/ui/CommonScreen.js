import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Container } from '@mui/material'

import commonSX from '../../theme/CommonSX'


const CommonScreen = (props) => {

    // Redirigir al login cuando NO haya iniciado sesion
    const token = window.localStorage.getItem('token')
    const navigate = useNavigate()
    useEffect(() => {
        if (!token) {
            navigate('/login')
        }
    })

    return (
        <Container sx={commonSX.container}>
            {props.children}
        </Container>
    )

}

export default CommonScreen
