import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Card, Container, Typography } from '@mui/material'

import commonSX from '../../theme/CommonSX'
import '../../css/global.css'


const ListCitasScreen = () => {

    // Redirigir al login cuando no haya iniciado sesion
    const navigate = useNavigate()
    const token = window.localStorage.getItem('token')
    useEffect(() => {
        if (!token) {
            navigate('/login')
        }
    })

    return (
        <Container sx={commonSX.container}>
            <Card align='center' sx={commonSX.card}>
                <Typography variant='h5' sx={commonSX.title}>
                    Citas programadas
                </Typography>
            </Card>
        </Container>
    )

}

export default ListCitasScreen
