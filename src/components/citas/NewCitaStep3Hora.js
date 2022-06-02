import React from 'react'
import { Box, Button, Typography } from '@mui/material'


const NewCitaStep3Hora = ({ handleBack, handleNext, styles }) => {

    return (
        <>
            <Typography variant='h6' align='center' sx={{ mt: 4 }}>
                Elija la hora
            </Typography>
            <Box sx={{ mb: 5 }}>
                <Button onClick={handleBack} variant='outlined' style={styles.btnBack}>Anterior</Button>
                <Button onClick={handleNext} variant='outlined' style={styles.btnNext}>Siguiente</Button>
            </Box>
        </>
    )

}

export default NewCitaStep3Hora
