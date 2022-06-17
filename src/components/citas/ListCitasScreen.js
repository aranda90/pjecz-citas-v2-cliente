import React, { useEffect, useState } from 'react'

import { Link } from 'react-router-dom'

import { Box, Button, Card, Typography } from '@mui/material'

import commonSX from '../../theme/CommonSX'

import '../../css/global.css'

import { DeleteCitas, GetCitCitas } from '../../actions/CitCitasActions'

const ListCitasScreen = () => {

    
    
    const [citaList, setCitaList] = useState([])
    const [citaDelete, setCitaDelete] = useState([])

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
            const response = await DeleteCitas(citaList)
            setCitaDelete(response.data.items)
            console.log(response)
        }
        fetchData()
    },[citaList])

    const handleClickDelete = (e) => {
        setCitaDelete(e.target.value)
        console.log(e.target.value)
    }
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
                    m: 1,
                    width: 350,
                    height: 220,
                    },
                }} 
            >
                {citaList.map((lista) => 

                    <Card align='center' sx={commonSX.card}>
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
                            <Button onClick={(e) => {return handleClickDelete(e)}} color="error" size="small" variant="contained" key={citaDelete} value={citaDelete}>
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
