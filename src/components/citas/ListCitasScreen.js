import React, { useEffect, useState } from 'react'

import { Link } from 'react-router-dom'

import { Box, Button, Card, CardActions, CardContent, CardHeader, Typography } from '@mui/material'

import commonSX from '../../theme/CommonSX'

import { GetCitCitas } from '../../actions/CitCitasActions'

import CancelCitaScreen from './CancelCitaScreen'

import moment from 'moment'

import '../../css/global.css'

import { useDispatch } from 'react-redux'
import { types } from '../../types/types'
import { TokenExpired } from '../modals/TokenExpired'


const ListCitasScreen = () => {


    let limiteCitas = 29
    const [citaList, setCitaList] = useState([])

    const dispatch = useDispatch();

    useEffect(() => {
        async function fetchData(){
            const response = await GetCitCitas()
            if(response.status === 200){
                setCitaList(response.data.items)     
            }else if(response.status === 401){               
                dispatch({ type: types.TOKEN_EXPIRED })
            }
        }
        fetchData()
    },[ dispatch ])

    const format = (inicio) => {
        return moment(inicio).format("YYYY-MM-DD HH:mm")
    }


    const cancelCard = (id) => {
        const filterCard = citaList.filter(citaList => citaList.id !== id)
        setCitaList(filterCard)
    }


 
    return (
        <>

            <TokenExpired />

            {citaList.length <= limiteCitas ?
            <Button component={Link} to='/new' variant="contained" sx={{m:4}}>
                Agendar Cita
            </Button>
            :
            <>
                <Button component={Link} to='/new' variant="contained" sx={{m:4}} disabled={true}>
                Agendar Cita
                </Button>
                <span style={{fontFamily:'Roboto', color: '#BC0B0B', marginTop:4, inlineSize:'620px', fontSize:18 }}>Alcanzaste el limite de citas</span>
            </>
            }
            {citaList.length === 0 && (
                <Typography align='center' variant='h4' sx={{mt:15}}>
                    No tienes citas agendadas
                </Typography>
            )}
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
                        <Typography sx={{mt:2}}>
                            {format(lista.inicio)}
                        </Typography>
                        <CardHeader
                            title={"Cita " + lista.id }
                            titleTypographyProps={{
                                fontSize:30,
                                fontWeight:500
                            }}
                        />
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
                            <Typography >
                                <br/>
                                {lista.notas}
                            </Typography>
                            <Typography >
                                <br/>
                                <b>{lista.codigo_asistencia}</b>
                            </Typography>
                        </CardContent>
                        
                        <CardActions style={{float:'right', paddingTop:13, height:'auto'}}>
                            <CancelCitaScreen Id={ lista.id } cancelCard={cancelCard} />
                        </CardActions>

                    </Card>
                )}
            </Box>
        </>
    )
}

export default ListCitasScreen
