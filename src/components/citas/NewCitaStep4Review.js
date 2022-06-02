import React from 'react'

import { useSelector } from 'react-redux'

import { Typography } from '@mui/material'


const NewCitaStep4Review = () => {

    const { distrito, oficina } = useSelector( state => state.citas );

    return (
        <Typography variant='h6' align='center' sx={{ mt: 4 }}>
            Revise su cita antes de agendar <br />

            { distrito } <br />

            { oficina } <br />
        </Typography>
    )

}

export default NewCitaStep4Review
