import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Box, Button, Chip, Container, Grid, Stack } from '@mui/material'

import { CalendarPicker, LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import moment from 'moment';

import 'moment/locale/es-mx';
//import { types } from '../../types/types';
import { GetCitDiasDisponibles } from '../../actions/CitCitasActions';

const NewCitaStep2Fecha = ({ handleBack, handleNext, styles }) => {
    
    //const dispatch = useDispatch()
    const { oficina_id, fecha_id } = useSelector(state => state.citas)
    const [date, setDate] = useState(new Date())
    const [fechas, setFechas] = useState([])
    
    /* Código de get fechas api */
    const fechasdisponibles = []
    fechas.map(x => fechasdisponibles.push(x.fecha))
    const arrayFechasCalendario = []
    for(let x = 0; x < 90; x++){
        let dia = moment(new Date()).add(x,'days')
        arrayFechasCalendario.push(dia.format('YYYY-MM-DD'))
    }
    
    const arrayFechasInhabiles = []
   
    
    arrayFechasCalendario.forEach(function(f){
        if(! fechasdisponibles.includes(f)){
           arrayFechasInhabiles.push(f)
        }
    })
    
    const disableDates = (date) => {
        if(arrayFechasInhabiles.find(element => element === moment(new Date(date)).format('YYYY-MM-DD'))){
            return true
        }
        console.log(arrayFechasInhabiles)
    }


    useEffect(() => {
        async function fetchData(){
            const response = await GetCitDiasDisponibles(oficina_id)
            if(response.status === 200){
                setFechas(response.data.items)
                console.log(response.data.items)
            }
        }
        fetchData()
    },[oficina_id])

    //console.log(fechasdisponibles)

    const guardarInformacion = () => {
        if(date === 0){
            return false;
        }

        // dispatch({
        //     type: types.SET_PASO_2,
        //     payload:{
        //         fecha_id: date,
        //         fecha: fechas.find((element) => { return element.id === date }).fecha,
        //     }
        // })
        handleNext()
    }
    return (
        <>
            <Container maxWidth='lg' sx={{ mt: 2 }}>
                <Grid container spacing={2}>

                    <Grid item md={1} xs={12}></Grid>

                    <Grid item md={5} xs={12}>

                    <LocalizationProvider dateAdapter={ AdapterMoment }>

                        <CalendarPicker                                                         
                            date={ moment(date) }
                            minDate={ moment( new Date() ) }
                            maxDate={ moment( date ).add(90, 'days') }
                            onChange={ ( newDate ) => { setDate( newDate ) } }
                            shouldDisableDate={ disableDates }
                            className='calendar'                          
                        />
                    </LocalizationProvider>
                    </Grid>

                    <Grid item md={5} xs={12} sx={{ mt:3}}>
                        <Stack spacing={2} alignItems="center">

                            <Stack direction="row" spacing={2}>

                            <Chip label='9:00 a.m' size="small"/>
                                
                            <Chip label='9:15 a.m' size="small"/>

                            <Chip label='9:30 a.m' size="small"/>

                            <Chip label='9:45 a.m' size="small"/>

                            </Stack>
                        </Stack>
                    </Grid>
                    <Grid item md={1} xs={12}></Grid>
                </Grid>
                    
                </Container>
            <Box sx={{ mb: 5 }}>
                <Button onClick={handleBack} variant='outlined' style={styles.btnBack}>Anterior</Button>
                <Button onClick={guardarInformacion} variant='outlined' style={styles.btnNext}>Siguiente</Button>
            </Box>
        </>
    )

}

export default NewCitaStep2Fecha
