import React from 'react'
import { Card, Typography } from '@mui/material'

import ContainerLoggedScreen from '../ui/ContainerLoggedScreen'
import commonSX from '../../theme/CommonSX'


const CancelCitaScreen = () => {

    return (
        <ContainerLoggedScreen>
            <Card align='center' sx={commonSX.card}>
                <Typography variant='h5' sx={commonSX.title}>
                    Cancelar una cita
                </Typography>
            </Card>
        </ContainerLoggedScreen>
    )

}

export default CancelCitaScreen
