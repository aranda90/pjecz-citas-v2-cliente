import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Box, Button, Chip, Container, Grid, ListItem, Paper, Stack } from '@mui/material'
import FaceIcon from '@mui/icons-material/Face'

import { CalendarPicker, LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment'
import moment from 'moment'

import 'moment/locale/es-mx'
import { types } from '../../types/types'
import { GetCitDiasDisponibles, GetHorasDisponibles } from '../../actions/CitCitasActions'

const NewCitaStep2Fecha = ({ handleBack, handleNext, styles }) => {
    
    const dispatch = useDispatch()
    const { oficina_id, fecha_id, servicio_id } = useSelector(state => state.citas)
   
    const [date, setDate] = useState(new Date())
    const [fechas, setFechas] = useState([])

    const [hora, setHora] = useState(new Date())
    const [horas, setHoras] = useState([])

    /* start fechas */
    
    const disableDates = (date) => {

        const diaDisponible = fechas.find(element => element.fecha === moment(new Date(date)).format('YYYY-MM-DD'))

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

    const horaDisponible = (hora) => {
        // const horaDisp = horas.find(element => element.hora === moment(new Date(hora).getTime()).format('HH:mm'))
        // console.log(horaDisp)
        //setHora((chips) => chips.filter((chip) => chip.key !== hora.key));
    }

    
    const guardarInformacion = () => {
        if(date === 0){
            return false;
        }

        dispatch({
            type: types.SET_PASO_1,
            payload:{
                fecha_id: date,
                fecha: fechas.find((element) => {return element.fecha === moment(new Date(date)).format('YYYY-MM-DD') }).fecha
            }
        })

        handleNext()
    }
    useEffect(() => {

        async function fetchData(){

            const params = {
                oficina_id: oficina_id, 
                fecha: moment(new Date(date)).format('YYYY-MM-DD'), 
                cit_servicio_id: servicio_id,
            }
            console.log(params)

            await GetHorasDisponibles( params ).then( response => {
                if(response.status === 200){
                    setHoras(response.data.items)
                    console.log(response.data.items)
                }
            });

        }

        fetchData()

    },[ oficina_id, date, servicio_id])
   

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
                            {horas.map((hora) =>
                                <Chip key={hora.id}>{hora}</Chip>                           
                            )}
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
