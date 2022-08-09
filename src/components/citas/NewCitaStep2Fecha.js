import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Box, Button, Chip, Container, Grid, Stack } from '@mui/material'

import { CalendarPicker, LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment'
import moment from 'moment'

import 'moment/locale/es-mx'
import { types } from '../../types/types'
import { GetCitDiasDisponibles, GetHorasDisponibles } from '../../actions/CitCitasActions'

import '../../css/global.css'

const NewCitaStep2Fecha = ({ handleBack, handleNext, styles}) => {
    
    const dispatch = useDispatch()
    const { oficina_id, servicio_id, hora: horaRedux } = useSelector(state => state.citas)
    
    const fechaminima = () => {
         let d = new Date()
                 
         if(d.getDay()){
             d.setDate(d.getDate() + 1)
             return d
         }
    }

    const [date, setDate] = useState(fechaminima())
    const [fechas, setFechas] = useState([])
    
    const [hora, setHora] = useState('')
    const [horas, setHoras] = useState([])



    const disableDates = (fechacalendario) => {
        const diaDisponible = fechas.find(element => element.fecha === moment(fechacalendario).format("YYYY-MM-DD"))
        if(diaDisponible?.fecha || moment(fechaminima()).format("YYYY-MM-DD") === moment(fechacalendario).format("YYYY-MM-DD")){
            return false
        }else{
            return true
        }
    }
    
    useEffect(() => {
        async function fetchData(){
            const response = await GetCitDiasDisponibles(oficina_id)
            if(response.status === 200){
                setFechas(response.data.items)
            }else if(response.status === 401){                
                window.localStorage.clear();
                dispatch({ type: types.SET_LOG_OUT_CIT_CLIENTE });
            }
        }
        fetchData()
    },[oficina_id,dispatch])
    

    const guardarInformacion = () => {
        if(hora === '' && date === '' ){
            return false;
        }
        
        dispatch({
            type: types.SET_PASO_2,
            payload:{
                fecha_id: date,
                fecha: fechas.find((element) => {return element.fecha === moment(new Date(date)).format('YYYY-MM-DD') }).fecha,
                hora_id: hora,
                hora: horas.find((element) => {return element.horas_minutos === hora }).horas_minutos,
            }
        })
        handleNext()
        
    }

    const handleClickSelected = ( horaSelected ) => {

        setHoras(
            horas.map( ( element ) => {

                if( element.horas_minutos === horaSelected ){
                    element.selected = !element.selected
                }
                else{
                    element.selected = false
                }

                return element
            }
        ))

        setHora(horaSelected)
    }
  
    useEffect(() => {
        async function fetchData(){
            setHoras([])
            setHora('')
            const params = {
                oficina_id: oficina_id, 
                fecha: moment(date).format('YYYY-MM-DD'),
                cit_servicio_id: servicio_id,
            }
            await GetHorasDisponibles( params ).then( response => {
                if(response.status === 200){

                    const horasData = response.data.items                 

                    if( horasData ){
                        setHoras(
                            horasData.map( ( element ) => {
                            return {
                                ...element,
                                selected: element.horas_minutos === horaRedux ? true : false
                            }
                        }))
                    }

                }else if(response.status === 401){                
                    window.localStorage.clear();
                    dispatch({ type: types.SET_LOG_OUT_CIT_CLIENTE });
                }
            })
        }
        fetchData()
    },[ oficina_id, date, servicio_id, horaRedux, dispatch ])
   
    
    return (
        <>
            <Container maxWidth='lg' sx={{ mt: 2 }}>
                <Grid container spacing={2}>

                    <Grid item md={1} xs={12}></Grid>

                    <Grid item md={5} xs={12}>

                    <LocalizationProvider dateAdapter={ AdapterMoment }>

                        <CalendarPicker                                                         
                            date={ moment( date )}
                            minDate={ moment(fechaminima()) }
                            onChange={ ( newDate ) => { setDate( newDate ) } }
                            shouldDisableDate={ disableDates }
                            className='calendar'                          
                        />
                    </LocalizationProvider>
                    </Grid>

                    <Grid item md={5} xs={12} sx={{ m:2}}>
                        <Stack 
                            alignItems='center' 
                            flexDirection='row' 
                            flexWrap='wrap' 
                            spacing={1} 
                        >
                            
                            { horas.map((h) => 
                                (
                                    h.selected
                                    ?
                                        <Chip 
                                            label={h.horas_minutos.slice(0,-3)}
                                            key={h.horas_minutos}
                                            onClick={ () => { handleClickSelected( h.horas_minutos ) } }
                                            color='primary'
                                        />
                                    :
                                        <Chip 
                                            label={h.horas_minutos.slice(0, -3)}
                                            key={h.horas_minutos}
                                            onClick={ () => { handleClickSelected( h.horas_minutos ) } }
                                        />
                                )  
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
