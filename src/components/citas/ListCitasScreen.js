import React, { useEffect, useState } from 'react'

import { Link } from 'react-router-dom'

import { Box, Button, Card, Typography } from '@mui/material'

import commonSX from '../../theme/CommonSX'

import '../../css/global.css'

import { DeleteCitas, GetCitCitas } from '../../actions/CitCitasActions'

const ListCitasScreen = () => {

    
    
    const [citaList, setCitaList] = useState([])

    useEffect(() => {
        async function fetchData(){
            const response = await GetCitCitas()
            console.log(response)
            if(response.status === 200){
                setCitaList(response.data.items)
                console.log(response.data.items)
            }
        }
        fetchData()
    },[])

    useEffect(() => {
        async function fetchData(){
            const response = await DeleteCitas(citaList.cit_cita_id)
            console.log(response)
        }
        fetchData()
    })
    return (
        <>
            
            <Button component={Link} to='/new' variant="contained" sx={{m:4}}>
                Agendar Cita
            </Button>
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    '& > :not(style)': {
                    m: 3,
                    width: 350,
                    height: 220,
                    },
                }} 
            >
                {citaList.map((lista) => 

                    <Card align='center' sx={commonSX.card} style={{width:300}}>
                        <Typography variant='h5' sx={commonSX.title} >
                            Cita Programada {lista.id}
                        </Typography>

                        <Typography style={{fontSize:16, marginRight:10}}>
                           <b> Fecha: </b> {lista.inicio}
                        </Typography>
                        <Typography>
                            <b>Oficina: </b> {lista.oficina_descripcion_corta}
                        </Typography>
                        <Typography >
                            <b>Servicio: </b> {lista.cit_servicio_descripcion}
                        </Typography>
                        <Typography >
                            <b>Servicio: </b> {lista.cit_servicio_descripcion}
                        </Typography>
                        <div style={{float:'right', marginTop: 15, marginBottom:10}}>
                            <Button color="error" size="small" variant="contained">
                                Cancelar
                            </Button>
                        </div>
                    </Card>
                )}
            </Box>
        </>
    )

}

export default ListCitasScreen
