import { CardMedia, Typography } from '@mui/material'
import React from 'react'
import ContainerCardCenter from '../ui/ContainerCardCenter'

export const RespuestaEncuestaSistema = () => {
  return (
    <>
    <ContainerCardCenter>
        <Typography variant='h4' style={{ textTransform:'uppercase', color:'#022E66'}}>
            Gracias por responder nuestra encuesta
        </Typography>
        <CardMedia
            component="img"
            image='../assets/imges/feedback1.png'
            height="auto"
            width="200"
            alt="feedback"
        />
    </ContainerCardCenter>
</>
  )
}
