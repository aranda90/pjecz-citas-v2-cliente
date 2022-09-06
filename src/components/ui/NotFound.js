import { Button, CardMedia, Grid, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

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
        <Grid item sm={9} xs={12}>
            <Typography variant='h4' gutterBottom style={{ textTransform:'uppercase', textAlign:'center', color:'#022E66'}}>
                Página no encontrada<br/> 
            </Typography>
            <Link 
              to='/' 
              className='link' 
              style={{  
                display:'flex', 
                float:'right', 
                fontWeight:500, 
                marginBottom:16, 
                marginRight:360, 
                textTransform:'uppercase'}}
            >
              regrese al inicio
            </Link>
            
        </Grid>
        <Grid item sm={1} xs={12}></Grid>
      </Grid>

      <Grid 
        alignContent="flex-start"
        container 
        direction='row'
        justifyContent="center"
      >
        <Grid item sm={4} xs={12}></Grid>
        <Grid item sm={4} xs={12}>
          <CardMedia
              component="img"
              image='../assets/imges/notfound1.png'
              height="auto"
              width="150"
              alt="not found"
          />
        </Grid>
        <Grid item sm={4} xs={12}></Grid>
      </Grid>
    </>
  )
}

export default NotFound