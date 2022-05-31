import React, { useState } from 'react'
import { Box, Button, Chip, Container, Grid, Stack } from '@mui/material'

import { CalendarPicker, LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import moment from 'moment';

import 'moment/locale/es-mx';

const NewCitaStep2Fecha = ({ handleBack, handleNext, styles }) => {

    const [date, setDate] = useState(new Date())
    const arrayFechasInhabiles = ['2022-05-23', '2022-05-30'];
    const disableDates = (date) => {
        if(arrayFechasInhabiles.find(element => element === moment(new Date(date)).format('YYYY-MM-DD'))){
            return true
        }
    }
    return (
        <>
            <Container maxWidth='lg' sx={{ mt: 2 }}>
                <Grid container spacing={2}>

                    <Grid item md={1} xs={12}></Grid>

                    <Grid item md={5} xs={12}>

                    <LocalizationProvider dateAdapter={ AdapterMoment }>

                        <CalendarPicker                                                         
                        date={ moment(date) }
                        minDate={ moment( new Date() ) }
                        onChange={ ( newDate ) => { setDate( newDate ) } } 
                        shouldDisableDate={ disableDates } 
                        className='calendar'                               
                        />

                    </LocalizationProvider>

                    </Grid>

                    <Grid item md={5} xs={12} sx={{ mt:3}}>
                        <Stack spacing={2} alignItems="center">

                            <Stack direction="row" spacing={2}>

                            <Chip label='9:00 a.m' size="small"/>
                                
                            <Chip label='9:15 a.m' size="small"/>

                            <Chip label='9:30 a.m' size="small"/>

                            <Chip label='9:45 a.m' size="small"/>

                            </Stack>
                        </Stack>
                    </Grid>
                    <Grid item md={1} xs={12}></Grid>
                </Grid>
                    
                </Container>
            <Box sx={{ mb: 5 }}>
                <Button onClick={handleBack} variant='outlined' style={styles.btnBack}>Anterior</Button>
                <Button onClick={handleNext} variant='outlined' style={styles.btnNext}>Siguiente</Button>
            </Box>
        </>
    )

}

export default NewCitaStep2Fecha
