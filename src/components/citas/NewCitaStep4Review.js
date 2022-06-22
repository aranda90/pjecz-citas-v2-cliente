import React from 'react'

import { Button, Stack, Typography } from '@mui/material'

import { Link } from 'react-router-dom'

const NewCitaStep4Review = () => {

    return (
        <>
            <Typography variant='h5' align='justify' sx={{ mt: 5, pl:5, pr:5 }}>
                <b>Su cita ha sido agendada correctamente. En unos minutos puede revisar su correo electrónico.</b>
            </Typography>
            <Typography align='justify' sx={{ mt:5, p:5 }}>
               
                Le agradecemos utilizar nuestro Sistema de citas en línea, le sugerimos acudir a nuestra sede con 10 minutos de anticipación para brindarle un mejor servicio. 
                <br /><br/>
                A su ingreso debe presentar una identificación oficial y mostrar el mensaje que se le envío a su correo electrónico. Si acude 10 minutos después de la hora señalada en esta confirmación no será posible garantizarle el servicio. 
            </Typography>
            <Stack direction="row" justifyContent="center" sx={{mt:5, mb:6}}>
                <Button component={Link} to='/citas' variant='contained'>Mis citas</Button>
            </Stack> 
        </>
    )

}

export default NewCitaStep4Review
