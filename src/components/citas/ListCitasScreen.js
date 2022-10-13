import React, { useEffect, useState } from 'react'

import { Link } from 'react-router-dom'

import { Alert, Box, Button, Card, CardActions, CardContent, CardHeader, CircularProgress, Grid, Tooltip, Typography } from '@mui/material'

import commonSX from '../../theme/CommonSX'

import { GetCitCitas, GetCitCitasDisponibles } from '../../actions/CitCitasActions'

import CancelCitaScreen from './CancelCitaScreen'

import moment from 'moment'


import { useDispatch } from 'react-redux'
import { types } from '../../types/types'
import { TokenExpired } from '../modals/TokenExpired'
import { GetPollPendiente } from '../../actions/EncuestaActions'

import '../../css/global.css'

const ListCitasScreen = () => {

    const [limitCit, setLimitCit] = useState(false)

    const [citaList, setCitaList] = useState([])

    const [encuestaPend, setEncuestaPend] = useState("")

    const [loadCitas, setLoadCitas] = useState( true )

    const dispatch = useDispatch();

    // mis citas
    useEffect(() => {
        async function fetchData(){
            setLoadCitas(true)

            const response = await GetCitCitas()

            setTimeout(() => {
                
                if(response.status === 200){

                    setCitaList(response.data.items)
                    setLoadCitas(false)

                }else if(response.status === 401){
                            
                    dispatch({ type: types.TOKEN_EXPIRED })
                }    

            }, 700)

        }
        fetchData()
    },[ dispatch ])

    const format = (inicio) => {
        return moment(inicio).format("YYYY-MM-DD HH:mm")
    }

    useEffect(() => {

        async function fetchData(){
            await GetPollPendiente().then( response => {

                if(response){
    
                    if(response.status === 200){
                        setEncuestaPend(response.data.url)
                    }
                    
                }
               
            }) 
        }
        fetchData()
    },[])

    useEffect(() => {

        async function fetchData(){
            await GetCitCitasDisponibles().then( response => {
                
                if(response){
                    
                    if(response.status === 200){
                        
                        if( response.data === 0 ){
                            setLimitCit( true )
                        }else{
                            setLimitCit( false )
                            
                        }
                    }
                    
                }
               
            }) 
        }
        fetchData()
    },[])


    const cancelCard = (id) => {
        const filterCard = citaList.filter(citaList => citaList.id !== id)
        setCitaList(filterCard)
        setLimitCit( false )
    }

 
    return (
        <>

            <TokenExpired />
            {
                encuestaPend ?
            
                <Alert severity="info">
                    Tienes una encuesta pendiente, responde dando  
                    <a className='link' style={{ color: '#002540', textTransform:'uppercase', fontWeight:500 }} href={encuestaPend}> click aquí </a>
                </Alert>
                :
                null
            }
            
            { 
                limitCit &&
                <Alert severity='error'>Alcanzaste el límite de citas</Alert>
            }
             
            <Button component={Link} to='/new' variant="contained" sx={{m:4}} disabled={ limitCit }>
                Agendar Cita
            </Button>

            {
                loadCitas
                ?
                    <Grid container direction="column" alignItems="center" justifyContent="center" style={{ marginTop: '15%' }}>
                        <CircularProgress size={50} />
                    </Grid> 
                :
                    <Grid container spacing={2} sx={{ p: 1, mt:5 }}>
                        {
                            citaList.length !== 0
                            ?
                                <Box
                                    sx={{
                                        display: 'flex',
                                        flexWrap: 'wrap',
                                        '& > :not(style)': {
                                            m: 1,
                                            width: 250,
                                            height: 'auto',
                                            marginBottom:6
                                        },
                                        marginBottom:5
                                    }} 
                                >
                                
                                    {citaList.map((lista) => 

                                        <Card align='center' sx={commonSX.card} key={ lista.id }>
                                            
                                            <CardHeader
                                                title={"Cita " + lista.id }
                                                titleTypographyProps={{
                                                    fontSize:30,
                                                    fontWeight:500
                                                }}
                                            />
                                            <Typography sx={{mt:2}}>
                                                {format(lista.inicio)}
                                            </Typography>
                                            <CardContent component="div" style={{paddingTop:3, minHeight:310, paddingBottom:18}}>
                                                <Typography>
                                                    <br/>
                                                    <b>{lista.oficina_descripcion_corta} </b> <br/>
                                                </Typography>
                                                <Typography >
                                                    <br/>
                                                    {lista.cit_servicio_descripcion}
                                                </Typography>
                                                <Typography >
                                                    <br/>
                                                    {lista.estado}
                                                </Typography>
                                                <br/>
                                                <Box sx={{ mt:2, fontFamily:'Roboto'}}>
                                                    <Tooltip title={lista.notas} arrow>
                                                        {
                                                            lista.notas.length > 40 ? <Box>{lista.notas.substring(0,40) + '...'}</Box> : <Box>{lista.notas}</Box>
                                                        }
                                                        
                                                    </Tooltip>
                                                </Box>
                                                <Typography sx={{ mt:3}}>
                                                    Código asistencia<br/>
                                                    <b style={{color:'#EB0000'}}>{lista.codigo_asistencia}</b>
                                                </Typography>
                                            </CardContent>
                                            
                                            <CardActions style={{float:'right', paddingTop:13, height:'auto'}}>
                                                <CancelCitaScreen Id={ lista.id } cancelCard={cancelCard} puedeCancelar={ lista.puede_cancelarse }/>
                                            </CardActions>

                                        </Card>
                                    )}

                                </Box>
                            :
                                <Grid item xs={12} sx={{ textAlign: 'center' }}>
                                    <Typography align='center' variant='h4' sx={{mt:15}}>
                                        No tienes citas agendadas
                                    </Typography>
                                </Grid>
                        }
                        
                    </Grid>
            }  
        </>
    )
}

export default ListCitasScreen
