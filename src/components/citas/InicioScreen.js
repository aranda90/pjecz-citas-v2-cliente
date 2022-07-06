import { Box, Grid, Typography } from '@mui/material'
import React from 'react'

export const InicioScreen = () => {
  return (
    <>
        <Grid sx={{mt:20, display:'flex', flexDirection:'row'}}>
            <Grid item sm={1} xs={12}></Grid>
            <Grid item sm={5} xs={12}>
                <Box sx={{mt:20, mb: 10, display:'flex', flexDirection:'column', pl:5}}>

                    <Typography variant='h4' gutterBottom>
                        Bienvenido al  sistema de citas
                    </Typography>
                    
                    <Typography variant='body1' >
                        Esta es una nueva versión de nuestro sistema. <br/>
                         
                        Para poder acceder o crear una cuenta nueva da click en el botón ingresar y comienza a agendar tus citas.
                    </Typography>
                </Box>
            </Grid>
            <Grid item sm={4} xs={12}>
                <img src='../assets/imges/inicioCitas.png' alt=''  />
            </Grid>
            <Grid item sm={2} xs={12}></Grid>

        </Grid>
    </>
  )
}
