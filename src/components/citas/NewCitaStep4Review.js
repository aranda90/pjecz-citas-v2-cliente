import React from 'react'

import { Typography } from '@mui/material'

const NewCitaStep4Review = () => {

    return (
        <>
            <Typography variant='h5' align='center' sx={{ mt: 4 }}>
                Su cita ha sido agendada correctamente, favor de revisar su correo electrónico
            </Typography>
            <Typography align='center'>
                Le agradecemos utilizar nuestro Sistema de citas en Línea, le sugerimos acudir a nuestra sede con 10 minutos de anticipación, para brindarle un mejor servicio. <br/>
                A su ingreso debe presentar una identificación oficial y mostrar el correo electrónico. Si acude 10 minutos después de la hora señalada en esta confirmación no será posible garantizarle el servicio. 
            </Typography>
        </>
    )

}

export default NewCitaStep4Review
