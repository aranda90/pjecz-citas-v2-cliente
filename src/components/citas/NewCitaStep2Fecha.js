import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Box, Button, Chip, Container, Grid, Stack } from '@mui/material'

import { CalendarPicker, LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import moment from 'moment';

import 'moment/locale/es-mx';
import { types } from '../../types/types';
import { GetCitDiasDisponibles } from '../../actions/CitCitasActions';

const NewCitaStep2Fecha = ({ handleBack, handleNext, styles }) => {
    
    const dispatch = useDispatch()
    const { oficina_id, fecha_id } = useSelector(state => state.citas)

    const [date, setDate] = useState(new Date())
    const [fechas, setFechas] = useState([])

  
    
  /* start fechas */
    
    const disableDates = (date) => {

        const diaDisponible = fechas.find(element => element.fecha === moment(new Date(date)).format('YYYY-MM-DD'));

        if( diaDisponible?.fecha || moment(new Date()).format('YYYY-MM-DD') === moment(new Date(date)).format('YYYY-MM-DD') ){
            return false
        }
        else{
            return true;
        }
        
    }

    useEffect(() => {
        async function fetchData(){
            const response = await GetCitDiasDisponibles(oficina_id)
            if(response.status === 200){
                setFechas(response.data.items)
            }
        }
        fetchData()
    },[oficina_id])


    /* end fechas */
   
    const guardarInformacion = () => {
        if(date === 0){
            return false;
        }

        dispatch({
            type: types.SET_PASO_2,
            payload:{
                fecha_id: date,
                fecha: fechas.find((element) => {return element.fecha === moment(new Date(date)).format('YYYY-MM-DD') }).fecha
            }
        })

        handleNext()
    }

    useEffect(() => {
        if(fecha_id !== 0){
            setDate(fecha_id)
        }
    },[fecha_id])
    
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
                            onChange={ ( newDate ) => { setDate( newDate ) } }
                            shouldDisableDate={ disableDates }
                            className='calendar'                          
                        />
                    </LocalizationProvider>
                    </Grid>

                    <Grid item md={5} xs={12} sx={{ mt:3}}>
                        <Stack spacing={2} alignItems="center">

                            <Stack direction="row" spacing={2}>

                                <Chip 
                                    label='9:00 a.m' 
                                    size="small"
                                />

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
