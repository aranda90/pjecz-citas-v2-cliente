import React from 'react'
import { Button, Card, Typography } from '@mui/material'

import ContainerLoggedScreen from '../ui/ContainerLoggedScreen'
import commonSX from '../../theme/CommonSX'


const ListCitasScreen = () => {

    return (
        <ContainerLoggedScreen>
            <Button variant="contained" href='/new' sx={{mb:5}}>Agendar Cita</Button>
            <Card align='center' sx={commonSX.card}>
                <Typography variant='h5' sx={commonSX.title}>
                    Citas programadas
                </Typography>
            </Card>
        </ContainerLoggedScreen>
    )

}

export default ListCitasScreen
