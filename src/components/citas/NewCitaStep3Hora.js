import React from 'react'

import { useSelector } from 'react-redux'

import { Box, Button, Typography } from '@mui/material'


const NewCitaStep3Hora = ({ handleBack, handleNext, styles }) => {

    const { distrito, oficina, servicio } = useSelector( state => state.citas );

    return (
        <>
            <Typography variant='h6' align='center' sx={{ mt: 4 }}>
                Elija la hora <br />

                { distrito } <br />

                { oficina } <br />

                { servicio } <br />

            </Typography>

            <Box sx={{ mb: 5 }}>
                <Button onClick={handleBack} variant='outlined' style={styles.btnBack}>Anterior</Button>
                <Button onClick={handleNext} variant='outlined' style={styles.btnNext}>Siguiente</Button>
            </Box>
        </>
    )

}

export default NewCitaStep3Hora
