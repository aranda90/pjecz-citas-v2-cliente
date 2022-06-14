import React from 'react'

import { useSelector } from 'react-redux'

import { Box, Button, Typography } from '@mui/material'
import { NewCita } from '../../actions/CitCitasActions';


const NewCitaStep3Hora = ({ handleBack, handleNext, styles }) => {

    const { distrito, oficina, servicio, fecha, hora } = useSelector( state => state.citas );

   const [datosCita, setDatosCita] = useState({
       oficina_id: '',
       cit_servicios_id: '',
       fecha: '',
       horas_minutos: '',
       nota: '',
    })

    const onClickDatos = () => {

        NewCita(datosCita).then( response => {
            console.log(response)
        })
        setDatosCita(true)
    }
    

    return (
        <>
            <Typography variant='h6' align='center' sx={{ mt: 4 }}>
                Resumen de su cita <br />

                { distrito } <br />

                { oficina } <br />

                { servicio } <br />

                { fecha } <br />

                { hora } <br/>

            </Typography>


            <Box sx={{ mb: 5 }}>
                <Button onClick={handleBack} variant='outlined' style={styles.btnBack}>Anterior</Button>
                <Button onClick={handleNext} variant='outlined' style={styles.btnNext}>Siguiente</Button>
            </Box>
        </>
    )

}

export default NewCitaStep3Hora
