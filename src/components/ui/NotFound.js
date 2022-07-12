import { Grid, Typography } from '@mui/material'
import React from 'react'

const NotFound = () => {
  return (
    <>
      <Grid 
        alignItems="center"
        container 
        direction='row'
        justifyContent="center"
      >
        <Grid item sm={2} xs={12}></Grid>
        <Grid item sm={8} xs={12}>
            <Typography variant='h4' gutterBottom style={{ textTransform:'uppercase', textAlign:'center'}}>
                Página no encontrada,<br/> regrese al inicio
            </Typography>
        </Grid>
        <Grid item sm={2} xs={12}></Grid>
      </Grid>

      <Grid 
        alignContent="center"
        container 
        direction='row'
        justifyContent="center"
      >
        <Grid item sm={4} xs={12}></Grid>
        <Grid item sm={5} xs={12} style={{ alignSelf:'revert-layer'}}>
            <img src='../assets/imges/notfound1.png' alt='' style={{maxWidth:400}} />
        </Grid>
        <Grid item sm={3} xs={12}></Grid>
      </Grid>
    </>
  )
}

export default NotFound