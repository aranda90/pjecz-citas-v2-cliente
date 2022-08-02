import {  Button, Grid, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

export const InicioScreen = () => {
  return (
    <>
        <Grid container sx={{mt:15, mb:'auto', display:'flex', flexDirection:'row'}}>
            <Grid item sm={1} xs={12}></Grid>
            <Grid item sm={5} xs={12} sx={{mt:15, mb: 10, display:'flex', flexDirection:'column', pl:6, ml:3}}>

                <Typography variant='h4' gutterBottom>
                    Bienvenido al nuevo sistema de citas
                </Typography>
                
                <Typography variant='body1' sx={{mb:3}}>
                    El <b>Poder Judicial del Estado de Coahuila de Zaragoza </b> pone al servicio de la ciudadanía la versión 2 del Sistema de citas que te permitirá agendar tu visita a nuestros órganos jurisdiccionales mediante una moderna herramienta en línea.
                </Typography>
                <Button color='success' variant='contained' component={Link} to='/login'>
                    Ingresar
                </Button>
            </Grid>
            <Grid item sm={5} xs={12}>
                <img src='../assets/imges/inicioCitas.png' alt='' style={{maxWidth:400}} />
            </Grid>
            <Grid item sm={1} xs={12}></Grid>

        </Grid>
    </>
  )
}
