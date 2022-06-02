import React from 'react'

import { Link } from 'react-router-dom'

import { Button, Card, Typography } from '@mui/material'

import commonSX from '../../theme/CommonSX'

import '../../css/global.css'

const ListCitasScreen = () => {

    return (
        <>
            <Button component={Link} to='/new' variant="contained" sx={{mb:5}}>
                Agendar Cita
            </Button>
            <Card align='center' sx={commonSX.card}>
                <Typography variant='h5' sx={commonSX.title}>
                    Citas programadas
                </Typography>
            </Card>
        </>
    )

}

export default ListCitasScreen
