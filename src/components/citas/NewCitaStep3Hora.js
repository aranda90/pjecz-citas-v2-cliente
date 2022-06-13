import React from 'react'

import { useSelector } from 'react-redux'

import { Box, Button, Typography } from '@mui/material'


const NewCitaStep3Hora = ({ handleBack, handleNext, styles }) => {

    const { distrito, oficina, servicio, fecha, hora } = useSelector( state => state.citas );

    console.log(hora)

    return (
        <>
            <Typography variant='h6' align='center' sx={{ mt: 4 }}>
                Resumen de su cita <br />

                { distrito } <br />

                { oficina } <br />

                { servicio } <br />

                { fecha } <br />

                { hora }

            </Typography>

            <Box sx={{ mb: 5 }}>
                <Button onClick={handleBack} variant='outlined' style={styles.btnBack}>Anterior</Button>
                <Button onClick={handleNext} variant='outlined' style={styles.btnNext}>Siguiente</Button>
            </Box>
        </>
    )

}

export default NewCitaStep3Hora
