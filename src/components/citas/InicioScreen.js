import {  Grid, Typography } from '@mui/material'
import React from 'react'

export const InicioScreen = () => {
  return (
    <>
        <Grid container sx={{mt:15, mb:'auto', display:'flex', flexDirection:'row'}}>
            <Grid item sm={1} xs={12}></Grid>
            <Grid item sm={5} xs={12} sx={{mt:15, mb: 10, display:'flex', flexDirection:'column', pl:6, ml:3}}>

                <Typography variant='h4' gutterBottom>
                    Bienvenido al  sistema de citas
                </Typography>
                
                <Typography variant='body1' >
                    Esta es una nueva versión de nuestro sistema. <br/>
                        
                    Para poder acceder o crear una cuenta nueva da click en el botón ingresar y comienza a agendar tus citas.
                </Typography>
            </Grid>
            <Grid item sm={5} xs={12}>
                <img src='../assets/imges/inicioCitas.png' alt='' style={{maxWidth:400}} />
            </Grid>
            <Grid item sm={1} xs={12}></Grid>

        </Grid>
    </>
  )
}
