import React from 'react'

import { Button, Stack, Typography } from '@mui/material'

import { Link } from 'react-router-dom'

const NewCitaStep4Review = () => {

    return (
        <>
            <Typography variant='h5' align='center' sx={{ mt: 5, pl:5, pr:5 }}>
                <b>Tu cita ha sido agendada correctamente. <br/>
                En unos minutos puedes revisar tu correo electrónico.</b>
            </Typography>
            <Typography align='justify' sx={{ mt:3, pl:5, pr:5 }}>
               
                Te agradecemos utilizar nuestro Sistema de citas en línea, te sugerimos acudir a nuestra sede con 10 minutos de anticipación para brindarte un mejor servicio. 
                <br /><br/>
                A tu ingreso debe presentar una identificación oficial y muestra el mensaje que se te envío a tu correo electrónico. Si acude 10 minutos después de la hora señalada en esta confirmación no será posible garantizarle el servicio. 
            </Typography>
            <Stack direction="row" justifyContent="center" sx={{mt:5, mb:6}}>
                <Button component={Link} to='/citas' variant='contained'>Mis citas</Button>
            </Stack> 
        </>
    )

}

export default NewCitaStep4Review
