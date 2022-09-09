import React from 'react'

import { Box, Button, Stack, Typography } from '@mui/material'

import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { types } from '../../types/types'


const NewCitaStep4Review = () => {

    const dispatch = useDispatch()

   
    const { codigo: codigoRedux} = useSelector(state => state.citas)
    
    return (
        <>
            <Typography variant='h5' align='center' sx={{ mt: 5, pl:5, pr:5 }}>
                <b>Tu cita ha sido agendada correctamente. <br/>
                </b>
            </Typography>
            <Typography variant='h5' align='center' sx={{ mt: 5, pl:5, pr:5, color:"#002540" }}>
                <b>Este es tu código de asistencia<br/></b>
                <Box style={{ color:'#EB0000'}}>{ codigoRedux }</Box>
                <Box style={{ color:'#002540', fontSize:11}}>Te sugerimos guardar bien este código</Box>
            </Typography>

            <Typography align='justify' sx={{ mt:3, pl:5, pr:5 }}>
               
                En unos minutos puedes revisar tu correo electrónico, te sugerimos acudir a nuestra sede con 10 minutos de anticipación para brindarte un mejor servicio. 
                <br /><br/>
                A tu ingreso debes presentar una identificación oficial y muestra el mensaje que se te envío a tu correo electrónico. Si acude 10 minutos después de la hora señalada en esta confirmación no será posible garantizarle el servicio. 
            </Typography>
            <Stack direction="row" justifyContent="center" sx={{mt:5, mb:6}}>
                <Button component={Link} to='/citas' variant='contained' onClick={ () => dispatch({ type:types.CLEAN_INPUTS })}>Mis citas</Button>
            </Stack> 
        </>
    )

}

export default NewCitaStep4Review
