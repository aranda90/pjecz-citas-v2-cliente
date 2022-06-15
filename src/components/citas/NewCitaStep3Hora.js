import React from 'react'

import { useSelector } from 'react-redux'

import { Box, Button, Grid, Typography } from '@mui/material'
import { NewCit } from '../../actions/CitCitasActions';


const NewCitaStep3Hora = ({ handleBack, handleNext, styles }) => {

    const { oficina_id, oficina, servicio_id, servicio, fecha, hora } = useSelector( state => state.citas );
 
    
    const guardarInformacion = async () => {

        const params = {
            oficina_id: oficina_id,
            cit_servicio_id: servicio_id,
            fecha: fecha,
            hora_minuto: hora,
            nota: 'hola cita'
        }

        await NewCit(params).then( response => {
            
            if( response ){

                if( response.status === 200){

                    handleNext()
                    console.log(response)

                }
            }

        })
    }
 
    return (
        <>
            <Typography variant='h6' align='center' sx={{ mt: 4 }}>
                Resumen de su cita 

            </Typography>
            <Grid align='center'>
                <Typography>
                    {oficina }- { oficina_id}
                </Typography>
                <Typography>
                    {servicio }- { servicio_id}
                </Typography>
                <Typography>
                    {fecha}
                </Typography>
                <Typography>
                    {hora}
                </Typography>
               
            </Grid>

            <Box sx={{ mb: 5 }}>
                <Button onClick={handleBack} variant='outlined' style={styles.btnBack}>Anterior</Button>
                <Button onClick={guardarInformacion} variant='outlined' style={styles.btnNext}>Confirmar Cita</Button>
            </Box>
        </>
    )

}

export default NewCitaStep3Hora
