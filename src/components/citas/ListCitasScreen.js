import React, { useEffect, useState } from 'react'

import { Link } from 'react-router-dom'

import { Box, Button, Card, CardActions, CardContent, CardHeader, Typography } from '@mui/material'

import commonSX from '../../theme/CommonSX'

import '../../css/global.css'

import { GetCitCitas } from '../../actions/CitCitasActions'
import CancelCitaScreen from './CancelCitaScreen'
import moment from 'moment'

const ListCitasScreen = () => {

    const [citaList, setCitaList] = useState([])

    useEffect(() => {
        async function fetchData(){
            const response = await GetCitCitas()
            if(response.status === 200){
                setCitaList(response.data.items)
            }
        }
        fetchData()
    },[])

    const format = (inicio) => {
        return moment(inicio).format("YYYY-MM-DD HH:mm")
    }


    return (
        <>
            
            <Button component={Link} to='/new' variant="contained" sx={{m:4}}>
                Agendar Cita
            </Button>
            
            {citaList.length === 0 && (
                <Typography align='center' variant='h4'>
                    No tiene citas agendadas
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
                    },
                }} 
            >
               
                {citaList.map((lista) => 

                    <Card align='center' sx={commonSX.card} key={ lista.id }>
                        <Typography >
                            <br/>
                            {format(lista.inicio)}
                        </Typography>
                        <CardHeader
                            //avatar={<Avatar src='/static/images/logo.png'>P</Avatar>}
                            title={"Cita " + lista.id }
                            titleTypographyProps={{
                                fontSize:30,
                                fontWeight:500
                            }}
                        />
                        <CardContent component="div">
                            
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
                        </CardContent>
                        
                        <CardActions style={{float:'right'}}>
                            <CancelCitaScreen Id={ lista.id } />
                        </CardActions>

                    </Card>
                )}
            </Box>
        </>
    )

}

export default ListCitasScreen
