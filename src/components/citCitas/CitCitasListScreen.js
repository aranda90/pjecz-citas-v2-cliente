import React, { useEffect } from 'react'
import { Card, Container, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { commonSX } from '../ui/commonSX'
import '../../css/global.css'


export const CitCitasListScreen = () => {

    let navigate = useNavigate()

    const token = window.localStorage.getItem('token')

    console.log(token)

    useEffect(() => {

        if (!token ) {
            navigate('/')
        }

    }, [ token ])

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
