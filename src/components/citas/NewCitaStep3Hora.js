import React, { useState } from 'react'

import { useSelector } from 'react-redux'

import { Box, Button, Grid, Typography } from '@mui/material'
import { NewCit } from '../../actions/CitCitasActions';


const NewCitaStep3Hora = ({ handleBack, handleNext, styles }) => {

    const { oficina_id, oficina, servicio_id, servicio, fecha, hora } = useSelector( state => state.citas );

    // const [datosCita, setDatosCita] = useState({
    //     oficina_id: oficina,
    //     cit_servicio_id: servicio,
    //     fecha: fecha,
    //     hora_minuto: hora,
    //     nota: 'Prueba de registro',
    // })    
    
    const guardarInformacion = async () => {

        const params = {
            oficina_id: oficina_id,
            cit_servicio_id: servicio_id,
            fecha: fecha,
            hora_minuto: '11:30',
            nota: 'hola'
        }

        await NewCit(params).then( response => {

            if( response ){

                if( response.status === 200){

                    handleNext()

                }
            }

        })
    }
 
    return (
        <>
            <Typography variant='h6' align='center' sx={{ mt: 4 }}>
                Resumen de su cita 

            </Typography>oficina
            <Grid>
                <Typography>
                    {oficina}
                </Typography>
                <Typography>
                    {servicio}
                </Typography>
                <Typography>
                    {fecha}
                </Typography>
               
            </Grid>

            <Box sx={{ mb: 5 }}>
                <Button onClick={handleBack} variant='outlined' style={styles.btnBack}>Anterior</Button>
                <Button onClick={guardarInformacion} variant='outlined' style={styles.btnNext}>Siguiente</Button>
            </Box>
        </>
    )

}

export default NewCitaStep3Hora
