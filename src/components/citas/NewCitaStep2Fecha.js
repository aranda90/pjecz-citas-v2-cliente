import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Alert, Box, Button, Chip, CircularProgress, Container, Grid, Stack, Typography } from '@mui/material'

import { CalendarPicker, LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment'
import moment from 'moment'

import 'moment/locale/es-mx'
import { types } from '../../types/types'
import { GetCitDiasDisponibles, GetHorasDisponibles } from '../../actions/CitCitasActions'

import '../../css/global.css'
import { TokenExpired } from '../modals/TokenExpired'

const NewCitaStep2Fecha = ({ handleBack, handleNext, styles}) => {
    
    const dispatch = useDispatch()

    const { oficina_id, servicio_id, hora: horaRedux } = useSelector(state => state.citas)

    const [date, setDate] = useState(moment(new Date()))
    const [isGetDate, setIsGetDate] = useState(false)
    const [fechas, setFechas] = useState([])
    
    const [loadHoras, setLoadHoras] = useState( true )
    const [hora, setHora] = useState('')
    const [horas, setHoras] = useState([])

    // Mensaje error
    const [errores, setErrores] = useState("")

    const disableDates = (fechacalendario) => {
        const diaDisponible = fechas.find(element => element.fecha === moment(fechacalendario).format("YYYY-MM-DD"))
        if(diaDisponible?.fecha === moment(fechacalendario).format("YYYY-MM-DD")){
            return false
        }else{
            return true
        }
    }
    
    useEffect(() => {
        async function fetchData(){
            setIsGetDate( false );

            const response = await GetCitDiasDisponibles(oficina_id)
            if(response.status === 200){
                setFechas(response.data.items)
                setDate(moment(response.data.items[0].fecha))
                setIsGetDate( true );
            }else if(response.status === 401){               
                dispatch({ type: types.TOKEN_EXPIRED })
            }
        }
        fetchData()
    },[oficina_id,dispatch])
    

    const guardarInformacion = () => {
        if(date === '' ){
            return false;
        }

        if(hora === ''){
            setErrores("Debes seleccionar una hora")
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
            setLoadHoras( true )

            const params = {
                oficina_id: oficina_id, 
                fecha: moment(date).format('YYYY-MM-DD'),
                cit_servicio_id: servicio_id,
            }

            console.log( params );

            if( isGetDate ){
                await GetHorasDisponibles( params ).then( response => {
                    console.log(response.status)
                    if(response.status === 200){
                        const horasData = response.data.items                 

                        if( horasData ){

                            setTimeout(() => {

                                setHoras(
                                    horasData.map( ( element ) => {
                                        return {
                                            ...element,
                                            selected: element.horas_minutos === horaRedux ? true : false
                                        }
                                    }
                                ))
                                setLoadHoras( false )

                            }, 1000)
                        }
                        else{
                            setLoadHoras( false )
                        }

                    }else if(response.status === 401){               
                        dispatch({ type: types.TOKEN_EXPIRED });
                    }
                }).catch(() => {
                    setLoadHoras( false )
                })
            }
        }
        fetchData()
    },[ oficina_id, date, servicio_id, horaRedux, isGetDate, dispatch ])
    
    return (
        <>
            <TokenExpired />
            <Container maxWidth='lg' sx={{ mt: 2 }}>
                <Grid container spacing={2}>

                    <Grid item md={1} xs={12}></Grid>

                    <Grid item md={5} xs={12}>

                        <LocalizationProvider dateAdapter={ AdapterMoment }>

                            <CalendarPicker                                                         
                                date={ date }
                                onChange={ ( newDate ) => { setDate( newDate ) } }
                                shouldDisableDate={ disableDates }
                                className='calendar'                          
                            />

                        </LocalizationProvider>
                    </Grid>

                    <Grid item md={5} xs={12} sx={{ m:1}}>
                        
                        {
                            loadHoras
                            ?
                                <Grid container direction="column" alignItems="center" justifyContent="center" style={{ marginTop: '25%' }}>
                                    <CircularProgress size={50} />
                                </Grid>
                                
                            :

                                <Grid container spacing={2} sx={{ p: 1, mt:5 }}>  

                                {
                                    
                                    horas.length !== 0
                                    ?
                                        horas.map( (h) => (

                                            h.selected
                                            ?
                                                <Grid key={ h.horas_minutos } item md={2} xs={4} > 

                                                    <Chip 
                                                        label={h.horas_minutos.slice(0,-3)}
                                                        key={h.horas_minutos}
                                                        onClick={ () => { handleClickSelected( h.horas_minutos ) } }
                                                        color='primary'
                                                        size='small'
                                                    />
                                                </Grid>
                                            :
                                                <Grid key={ h.horas_minutos } item md={2} xs={4} > 

                                                    <Chip 
                                                        label={h.horas_minutos.slice(0, -3)}
                                                        key={h.horas_minutos}
                                                        onClick={ () => { handleClickSelected( h.horas_minutos ) } }
                                                        size='small'
                                                    />
                                                </Grid>

                                        ))
                                    :
                                        <Grid item xs={12} sx={{ textAlign: 'center' }}>
                                            <Typography variant="subtitle1" style={{ fontWeight: 'bold' }} >
                                                No se tiene horas disponibles en esta fecha
                                            </Typography>        
                                        </Grid>

                            }
                    
                        </Grid>
                        }

                        {
                            errores
                            &&
                            <Alert severity='warning' variant='filled' sx={{ mt: 1 }}>
                                {errores}
                            </Alert>
                        }
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
