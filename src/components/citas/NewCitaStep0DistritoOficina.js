import React, { useEffect, useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'

import { Box, Button, Container, FormControl, Grid, InputLabel, MenuItem, Select } from '@mui/material'

import { GetDistritos, GetOficinas } from '../../actions/CitCitasActions'

import { types } from '../../types/types'
import { TokenExpired } from '../modals/TokenExpired'


const NewCitaStep0DistritoOficina = ({ handleNext, styles }) => {

    const dispatch = useDispatch()

    const { distrito_id, oficina_id } = useSelector( state => state.citas )

    // Distrios
    const [distritos, setDistritos] = useState([])
    const [distrito, setDistrito] = useState(0)

    // Oficinas
    const [oficinas, setOficinas] = useState([])
    const [oficina, setOficina] = useState(0)

    const handleChangeDistrito = (e) => {
        setDistrito(e.target.value)
    }

    const handleChangeOficina = (e) => {
        setOficina(e.target.value)
    }

    const guardarInformacion = () =>{
        
        if( oficina === 0 && distrito === 0){
            return false
        }

        dispatch({
            type: types.SET_PASO_0,
            payload:{
                distrito_id: distrito,
                distrito: distritos.find( ( element ) => { return element.id === distrito; } ).nombre,
                oficina_id: oficina,
                oficina: oficinas.find( ( element ) => { return element.id === oficina; } ).descripcion,
            }
        })

        

        handleNext()
    }

    // Distritos
    useEffect(() => {
        async function fetchData(){
            const response = await GetDistritos()
            if(response.status === 200){
                setDistritos(response.data.items)
            }else if(response.status === 401){               
                dispatch({ type: types.TOKEN_EXPIRED });
            }
        }
        fetchData()
    },[ dispatch ])

    // Oficinas
    useEffect(() => {
        async function fetchData(){
            setOficinas([])
            setOficina(0)

            if(distrito !== 0){
                const response = await GetOficinas(distrito)
                if(response.status === 200){
                    setOficinas(response.data.items)
                }else if(response.status === 401){               
                    dispatch({ type: types.TOKEN_EXPIRED });
                }
            }

        }
        fetchData()
    },[distrito,dispatch])

    useEffect(() => {
      
        if( distrito_id !== 0 ){    
            setDistrito( distrito_id )
        }

    }, [ distrito_id ])
    
    useEffect(() => {
      
        if( oficina_id !== 0 && oficinas.length !== 0 ){    
            setOficina( oficina_id )
        }

    }, [ oficina_id, oficinas ])

   
    return (
        <>
            <TokenExpired />
            <Container sx={{ mt: 5 }}>
                <Grid container spacing={2}>
                    <Grid item md={1} xs={12}></Grid>
                    <Grid item md={10} xs={12} sx={{ mb: 2 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <FormControl fullWidth>
                                    <InputLabel id="distrito">Distrito</InputLabel>
                                    <Select
                                        id="distrito"
                                        labelId="distrito"
                                        label="Distrito"
                                        name="distrito"
                                        value={distrito}
                                        onChange={(e) => { handleChangeDistrito(e) }}
                                    >
                                        <MenuItem key='0' value='0'>Selecciona una opción</MenuItem>
                                        {distritos.map((distrito) =>
                                            <MenuItem key={distrito.id} value={distrito.id}>
                                                {distrito.nombre}
                                            </MenuItem>
                                        )}
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12}>
                                <FormControl fullWidth>
                                    <InputLabel id="oficina">Oficina</InputLabel>
                                    <Select
                                        id="oficina"
                                        labelId="oficina"
                                        label="Oficina"
                                        name="oficina"
                                        value={oficina}
                                        onChange={(e) => { handleChangeOficina(e) }}
                                        disabled={distrito === 0}
                                    >
                                        <MenuItem key='0' value='0'>Selecciona una opción</MenuItem>
                                        {oficinas.map((oficina) =>
                                            <MenuItem key={oficina.id} value={oficina.id}>
                                                {oficina.descripcion}
                                            </MenuItem>
                                        )}
                                    </Select>
                                </FormControl>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>

            <Box sx={{ mb: 8 }}>
                <Button onClick={ guardarInformacion } variant='outlined' style={styles.btnNext}>Siguiente</Button>
            </Box>
        </>
    )

}

export default NewCitaStep0DistritoOficina
