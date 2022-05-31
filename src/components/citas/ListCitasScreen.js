import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Card, Typography } from '@mui/material'

import ContainerLoggedScreen from '../ui/ContainerLoggedScreen'
import commonSX from '../../theme/CommonSX'
import '../../css/global.css'


const ListCitasScreen = () => {

    return (
        <ContainerLoggedScreen>
            <Button component={Link} to='/new' variant="contained" sx={{mb:5}}>
                Agendar Cita
            </Button>
            <Card align='center' sx={commonSX.card}>
                <Typography variant='h5' sx={commonSX.title}>
                    Citas programadas
                </Typography>
            </Card>
        </ContainerLoggedScreen>
    )

}

export default ListCitasScreen
