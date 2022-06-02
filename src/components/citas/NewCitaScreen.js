import React, { useState } from 'react'

import { Box, Button, Card, Typography, Step, StepLabel, Stepper } from '@mui/material'

import commonSX from '../../theme/CommonSX'

import NewCitaStep0DistritoOficina from './NewCitaStep0DistritoOficina'
import NewCitaStep1Servicio from './NewCitaStep1Servicio'
import NewCitaStep2Fecha from './NewCitaStep2Fecha'
import NewCitaStep3Hora from './NewCitaStep3Hora'
import NewCitaStep4Review from './NewCitaStep4Review'

const NewCitaScreen = () => {

    const [activeStep, setActiveStep] = useState(0);

    const handleNext = () => {
        setActiveStep((prev) => prev + 1);
    }

    const handleBack = () => {
        setActiveStep((prev) => prev - 1);
    }

    const styles = {
        btnNext: { float: 'right', marginTop: 40 },
        btnBack: { marginTop: 40 },
        parrafo: { fontSize: 14, fontWeight: 400 }
    }

    const stepBody = (activeStep) => {
        switch (activeStep) {
            case 0:
                return(
                    <>
                        <NewCitaStep0DistritoOficina />
                        <Box sx={{ mb: 5 }}>
                            <Button onClick={handleNext} variant='outlined' style={styles.btnNext}>Siguiente</Button>
                        </Box>
                    </>
                )
            case 1:
                return(
                    <>
                        <NewCitaStep1Servicio />
                        <Box sx={{ mb: 5 }}>
                            <Button onClick={handleBack} variant='outlined' style={styles.btnBack}>Anterior</Button>
                            <Button onClick={handleNext} variant='outlined' style={styles.btnNext}>Siguiente</Button>
                        </Box>
                    </>
                )
            case 2:
                return(
                    <>
                        <NewCitaStep2Fecha />
                        <Box sx={{ mb: 5 }}>
                            <Button onClick={handleBack} variant='outlined' style={styles.btnBack}>Anterior</Button>
                            <Button onClick={handleNext} variant='outlined' style={styles.btnNext}>Siguiente</Button>
                        </Box>
                    </>
                )
            case 3:
                return(
                    <>
                        <NewCitaStep3Hora />
                        <Box sx={{ mb: 5 }}>
                            <Button onClick={handleBack} variant='outlined' style={styles.btnBack}>Anterior</Button>
                            <Button onClick={handleNext} variant='outlined' style={styles.btnNext}>Siguiente</Button>
                        </Box>
                    </>
                )
            default:
                return(
                    <>
                        <NewCitaStep4Review />
                    </>
                )
        }
    }

    return (        
        <Card sx={commonSX.card}>
            <Typography align='center' sx={{ mb: 5, fontWeight: 500 }} variant='h4'>
                Registro de Citas
                <p style={styles.parrafo}>Llena los datos que se solicitan en cada paso</p>
            </Typography>
            <Stepper alternativeLabel activeStep={activeStep}>
                <Step>
                    <StepLabel>Distrito y Oficinas</StepLabel>
                </Step>
                <Step>
                    <StepLabel>Tipo de tramite</StepLabel>
                </Step>
                <Step>
                    <StepLabel>Fecha y Hora</StepLabel>
                </Step>
                <Step>
                    <StepLabel>Confirmación de cita</StepLabel>
                </Step>
            </Stepper>
            { stepBody(activeStep) }
        </Card>
    )
}

export default NewCitaScreen
