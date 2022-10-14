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
        <Grid container align='center' style={{ padding:'3px 15px', marginTop:15}}>
            <Grid item sm={3} xs={12}></Grid>
            <Grid item sm={7} xs={12}>
                <Typography align='justify' sx={{ mt:3, color:'#002540' }}>
                    La confirmación de tu cita fue envíada a tu correo, la cual debes de mostrar junto con una identificación oficial al acudir a tu cita.
                </Typography>
                <Typography align='justify' sx={{ mt:3, color:'#002540' }}>
                    Agenda de forma responsable tus citas y haz un buen uso del sistema.
                </Typography>
                <Typography variant='subtitle1' align='justify' sx={{ mt:3, fontWeight:500, color:'#B70000'}}>
                    Puedes cancelar tu cita 24 horas antes de la fecha agendada. 
                </Typography>
            </Grid>
            <Grid item sm={2}  xs={12}></Grid>
        </Grid>
            <Stack direction="row" justifyContent="center" sx={{mt:5, mb:6}}>
                <Button component={Link} to='/citas' variant='contained' onClick={ () => dispatch({ type:types.CLEAN_INPUTS })}>Mis citas</Button>
            </Stack> 
        </>
    )

}

export default NewCitaStep4Review
