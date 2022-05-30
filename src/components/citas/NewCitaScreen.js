import React, { useState }  from 'react'
import { Box, Button, Card, Typography, Step, StepLabel, Stepper } from '@mui/material'

import CommonScreen from '../ui/CommonScreen'
import commonSX from '../../theme/CommonSX'


const NewCitaScreen = () => {

    const [activeStep, setActiveStep] = useState(0);

    const handleNext = () => {
        setActiveStep( (prev) => prev + 1 );
    }

    const handleBack = () => {
        setActiveStep( (prev) => prev - 1 );
    }
    
    const styles = {
        btnNext:{ float: 'right', marginTop: 40 },
        btnBack: { marginTop: 40 },
        parrafo:{ fontSize: 14, fontWeight: 400 }
    }
    
    return (
        <CommonScreen>
            <Card sx={commonSX.card}>
                <Typography align='center' sx={{ mb:5, fontWeight: 500 }} variant='h4'>
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
                {
                    activeStep === 0 ?
                    (
                      <>
                        <Typography variant='h6' align='center' sx={{ mt:4 }}>Aqui van los distritos y oficinas</Typography>
                        {}
                        <Button onClick={handleNext} variant='outlined' style={ styles.btnNext } >
                          Siguiente
                        </Button>
                      </>
                    ):
                    activeStep === 1 ?
                    (
                        <>
                            <Typography variant='h6' align='center' sx={{ mt:4 }}>Aqui van los tramites </Typography>
                            <Box sx={{ mb: 5 }}>
                            <Button onClick={handleBack} variant='outlined' style={styles.btnBack }>Anterior</Button>
                            <Button onClick={handleNext} variant='outlined' style={ styles.btnNext }>Siguiente</Button>
                            </Box>
                        </>
                    ):
                    activeStep === 2 ?
                    (
                        <>
                            <Typography variant='h6' align='center' sx={{ mt:4 }}>Fecha y Hora</Typography>
                            <Button onClick={handleBack} variant='outlined' style={styles.btnBack }>Anterior</Button>
                            <Button onClick={handleNext} variant='outlined' style={ styles.btnNext }>Siguiente</Button>
                        </>
                    ):
                    activeStep === 3 ?
                    (
                      <>
                        <Typography variant='h6' align='center' sx={{ mt:4 }}>Aquí va la Confirmación de la cita</Typography>
                        <Button onClick={handleBack} variant='outlined' style={styles.btnBack }>Anterior</Button>
                        <Button onClick={handleNext} variant='outlined' style={ styles.btnNext }>Siguiente</Button>
                      </>
                    ):
                    <Typography variant='h6' align='center' sx={{ mt:4 }}>Cita registrada con exito</Typography>
                }
            </Card>
        </CommonScreen>
    )
}

export default NewCitaScreen
