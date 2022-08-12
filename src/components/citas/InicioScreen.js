import React from 'react'
import { useSelector } from 'react-redux'
import {  Box, Button, Grid, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

export const InicioScreen = () => {
    const { isAuthenticated } = useSelector( state => state.auth )

  return (
    <>
        <Grid container sx={{mt:15, mb:'auto', display:'flex', flexDirection:'row'}}>
            <Grid item sm={1} xs={12}></Grid>
            <Grid item sm={5} xs={12} sx={{mt:15, mb: 15, display:'flex', flexDirection:'column', pl:6, ml:3}}>

                <Typography variant='h4' gutterBottom>
                    Bienvenido(a) al nuevo sistema de citas
                </Typography>
                
                <Typography variant='body1' sx={{mb:3}}>
                    El <b>Poder Judicial del Estado de Coahuila de Zaragoza </b> pone al servicio de la ciudadanía la versión 2 del Sistema de citas que te permitirá agendar tu visita a nuestros órganos jurisdiccionales mediante una moderna herramienta en línea.
                </Typography>
                {
                    isAuthenticated 
                ? 
                    null
                :
                <Button color='success' variant='contained' component={Link} to='/login' sx={{mr:2}}>
                    Ingresar
                </Button>
                }
                <Typography variant='body2' color='inherit' sx={{textAlign: 'center', mb:1, mt:1}}>
                    Aclaraciónes, dudas y comentarios, contáctenos al correo: <b>citas@pjecz.gob.mx</b>
                </Typography>
                <Typography variant='body2' color='inherit' sx={{textAlign: 'center', mb:1, mt:1}}>
                   <Link to='/preguntas_frecuentes' style={{ textDecoration:'none', color:'#032590'}}> 
                    ¿Tienes dudas? Lee las Preguntas Frecuentes 
                   </Link>
                </Typography>
            </Grid>
            <Grid item sm={5} xs={12}>
                <Box m={4} width={200}>
                    <img src='../assets/imges/inicioCitas.png' alt='' style={{maxWidth:400, marginTop:60}} />
                </Box>
            </Grid>
            <Grid item sm={1} xs={12}></Grid>
        </Grid>
    </>
  )
}
