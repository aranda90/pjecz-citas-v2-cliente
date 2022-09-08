import React from 'react'
import { Avatar, Card, CardHeader, CardMedia, Container, Grid, Stack } from '@mui/material'
import commonSX from '../../theme/CommonSX'

export const RespuestaEncuestaSistema = () => {
  return (
    <>
    <Container sx={commonSX.container}>
      <Grid container spacing={2}>
          <Grid item md={3} xs={12}></Grid>
          <Grid item md={6} xs={12}>
              
            <Card align='center' sx={{ maxWidth: 450 }}>
              <CardMedia
                component="img"
                src='https://storage.googleapis.com/pjecz-informatica/static/images/encuesta.png'
                sx={{  display:'flex', width:350}}
                alt="feedback"
              />
              <CardHeader 
                avatar={
                  <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 1, sm: 2, md: 4 }}>
                    <Avatar
                      src='https://storage.googleapis.com/pjecz-informatica/static/images/check.png'
                      style={{  objectFit:'scale-down' , marginLeft:5, width:'auto' }}
                      variant='square'
                    />
                  </Stack>
              
                }
                style={{ 
                  background:'linear-gradient(180deg, rgba(6,109,166,1) 0%, rgba(1,80,123,1) 35%, rgba(0,67,96,1) 100%)',
                  boxShadow:'-3px -6px 13px -4px rgba(137,137,137,0.75)', 
                  color:'#F8F8F8', 
                  margin:0, 
                  marginTop:10,
                  textTransform:'uppercase', 
                  padding:20, 
                }}
                title="Gracias por responder nuestra encuesta"
              />
            </Card>
          </Grid>
          <Grid item md={3} xs={12}></Grid>
      </Grid>
    </Container>
</>
  )
}
