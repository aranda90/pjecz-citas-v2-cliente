import React from 'react'
import { Card, Typography } from '@mui/material'

import CommonScreen from '../ui/CommonScreen'
import commonSX from '../../theme/CommonSX'


const NewCitaScreen = () => {

    return (
        <CommonScreen>
            <Card align='center' sx={commonSX.card}>
                <Typography variant='h5' sx={commonSX.title}>
                    Programar una cita
                </Typography>
            </Card>
        </CommonScreen>
    )

}

export default NewCitaScreen
