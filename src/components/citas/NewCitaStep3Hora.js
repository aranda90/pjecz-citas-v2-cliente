import React from 'react'

import { useDispatch, useSelector } from 'react-redux'

import { Box, Button, Grid, Typography } from '@mui/material'
import { NewCit } from '../../actions/CitCitasActions';
import { types } from '../../types/types';


const NewCitaStep3Hora = ({ handleBack, handleNext, styles }) => {

    const dispatch = useDispatch();

    const { distrito, oficina_id, oficina, servicio_id, servicio, fecha, hora } = useSelector( state => state.citas );
 
    
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

                }
                
            }
            cleanInputs()
        })
    }
 
    const cleanInputs = () => {
        dispatch({
            type:types.CLEAN_INPUTS
        })
    }

    return (
        <>
            <Typography variant='h5' align='center' sx={{ mt: 4, mb:4 }}>
                Resumen de su cita 
            </Typography>
            {NewCit.length === 0 && (
                <Typography align='center' variant='h4' sx={{mt:15}}>
                    Llego al limite para agendar citas
                </Typography>
            )}
            <Grid container align='justify'>
                <Grid item sm={3} xs={12}></Grid>
                <Grid item sm={6} xs={12}>

                    <Typography variant='h6' sx={{mt:2,mb:2}}>
                        Distrito:  { distrito}
                    </Typography>
                    <Typography variant='h6' sx={{mt:2,mb:2}}>
                        Oficina: {oficina }               
                    </Typography>
                    <Typography variant='h6' sx={{mt:2,mb:2}}>
                        Servicio: {servicio }
                    </Typography>
                    <Typography variant='h6' sx={{mt:2,mb:2}}>
                        Fecha: {fecha}
                    </Typography>
                    <Typography variant='h6' sx={{mt:2,mb:2}}>
                        Hora: {hora.slice(0,-3)}
                    </Typography>
                
                </Grid>
                <Grid item sm={3} xs={12}></Grid>
                
            </Grid>

            <Box sx={{ mb: 5 }}>
                <Button onClick={handleBack} variant='outlined' style={styles.btnBack}>Anterior</Button>
                <Button onClick={guardarInformacion} variant='outlined' style={styles.btnNext}>Confirmar Cita</Button>
            </Box>
        </>
    )

}

export default NewCitaStep3Hora
