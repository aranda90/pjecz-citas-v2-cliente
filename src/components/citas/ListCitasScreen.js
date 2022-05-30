import React from 'react'
import { Button, Card, Typography } from '@mui/material'

import CommonScreen from '../ui/CommonScreen'
import commonSX from '../../theme/CommonSX'


const ListCitasScreen = () => {

    return (
        <CommonScreen>
            <Button variant="contained" href='../new' sx={{mb:5}}>Agendar Cita</Button>
            <Card align='center' sx={commonSX.card}>
                <Typography variant='h5' sx={commonSX.title}>
                    Citas programadas
                </Typography>
            </Card>
        </CommonScreen>
    )

}

export default ListCitasScreen
