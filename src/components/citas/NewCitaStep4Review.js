import React from 'react'

import { Box, Button, Grid, Stack, Typography } from '@mui/material'

import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { types } from '../../types/types'


const NewCitaStep4Review = () => {

    const dispatch = useDispatch()

   
    const { codigo: codigoRedux} = useSelector(state => state.citas)
    
    return (
        <>
        <Grid container align='center' sx={{mt:6}}>
            <Grid item xs={12}></Grid>
            <Grid item xs={12}>
                <Typography variant='h5' align='center' sx={{ color:"#002540", mt: 3, pl:5, pr:5, textTransform:'uppercase' }}>
                    <b>Tu cita se agendo correctamente</b>
                </Typography>
            </Grid>
            <Grid item xs={12}></Grid>
        </Grid>
        <Grid container align='center'>
            <Grid item  xs={12}></Grid>
            <Grid item  xs={12}>
                <Typography variant='h5' align='center' sx={{ mt: 2, pl:5, pr:5, color:"#002540" }}>
                    <b>Código de asistencia<br/></b>
                </Typography>
                <Box style={{ color:'#EB0000', fontSize:30}}>{ codigoRedux }</Box>
                <Box style={{ color:'#002540', fontSize:11}}>Muéstralo para marcar tu asistencia</Box>
            </Grid>
            <Grid item  xs={12}></Grid>
        </Grid>
        <Grid container align='center' style={{ padding:'3px 15px'}}>
            <Grid item xs={12}></Grid>
            <Grid item xs={12}>
                <Typography align='justify' sx={{ mt:3, pl:10, pr:10 }}>
                    En unos minutos puedes revisar tu correo electrónico, te sugerimos acudir a nuestra sede con 10 minutos de anticipación para brindarte un mejor servicio. 
                </Typography>
                <Typography align='justify' sx={{ mt:3, pl:10, pr:10 }}>
                    A tu ingreso debes presentar una identificación oficial y presentar el mensaje que se te envío a tu correo electrónico. Si acude 10 minutos después de la hora señalada en esta confirmación no será posible garantizarle el servicio. 
                </Typography>
            </Grid>
            <Grid item xs={12}></Grid>
        </Grid>
            <Stack direction="row" justifyContent="center" sx={{mt:5, mb:6}}>
                <Button component={Link} to='/citas' variant='contained' onClick={ () => dispatch({ type:types.CLEAN_INPUTS })}>Mis citas</Button>
            </Stack> 
        </>
    )

}

export default NewCitaStep4Review
