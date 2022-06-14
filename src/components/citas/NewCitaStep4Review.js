import React from 'react'

import { useSelector } from 'react-redux'

import { Typography } from '@mui/material'


const NewCitaStep4Review = () => {

    const {  oficina, servicio, fecha, hora } = useSelector( state => state.citas );

    return (
        <>
            <Typography variant='h6' align='center' sx={{ mt: 4 }}>
                Se agendo su cita, favor de revisar su correo electronico
            </Typography>
            <Typography align='center'>
                { oficina } <br />

                { servicio } <br />

                { fecha } <br />

                { hora } <br />

                {'Prueba de registro'}
            </Typography>
        </>
    )

}

export default NewCitaStep4Review
