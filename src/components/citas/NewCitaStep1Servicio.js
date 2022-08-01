import React, { useEffect, useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'

import { Box, Button, Container, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
import { GetOficinaServicio } from '../../actions/CitCitasActions'
import { types } from '../../types/types'


const NewCitaStep1Servicio = ({ handleBack, handleNext, styles }) => {

    const dispatch = useDispatch()
    const { oficina_id, servicio_id, nota_id,nota } = useSelector(state => state.citas)
    console.log(nota_id, nota)
    //servicios
    const [servicios, setServicios] = useState([])
    const [servicio, setServicio] = useState(0)

    const [notas, setNotas] = useState(nota)

    const handleChangeServicio = (e) => {
        setServicio(e.target.value)
        console.log(e.target.value)

    }

    const guardarInformacion = () => {

        if(servicio === 0){
            return false
        }

        dispatch({
            type: types.SET_PASO_1,
            payload:{
                servicio_id: servicio,
                servicio: servicios.find((element) => { return element.cit_servicio_id === servicio }).cit_servicio_descripcion,
                nota_id:notas,
                nota:notas,
            }
        })

        handleNext()
    }

    useEffect(() => {
        async function fetchData(){
            setServicios([])
            setServicio(0)

            const response = await GetOficinaServicio(oficina_id)
            if(response.status === 200){
                setServicios(response.data.items)
            }else if(response.status === 401){                
                window.localStorage.clear()
                dispatch({ type: types.SET_LOG_OUT_CIT_CLIENTE })
            }
        }
        fetchData()
    },[oficina_id,dispatch])

    useEffect(() => {
        if(servicio_id !== 0){
            setServicio(servicio_id)
        }
    },[servicio_id])

    
    return (
        <>
            <Container sx={{ mt: 5, mb: 2 }}>
                <Grid container spacing={2}>
                    <Grid item md={1} xs={12}></Grid>
                    <Grid item md={5} xs={12}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <FormControl fullWidth>
                                    <InputLabel id="servicio">Tipo de tramite</InputLabel>
                                    <Select
                                        id="servicio"
                                        labelId="servicio"
                                        label="Tipo de tramite"
                                        name="servicio"
                                        value={servicio}
                                        onChange={(e) => { handleChangeServicio(e) }}
                                    >
                                        <MenuItem key={0} value={0}>Seleccionar una opción</MenuItem>
                                        {servicios.map((servicio) =>
                                            <MenuItem key={servicio.cit_servicio_id} value={servicio.cit_servicio_id}>
                                                {servicio.cit_servicio_descripcion}
                                            </MenuItem>
                                        )}
                                    </Select>
                                </FormControl>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item md={5} xs={12}>
                        <Grid item xs={12}>
                            <TextField
                                id="indicaciones_tramite"
                                label="Indicaciones del tramite y agregar expedientes si se requiere"
                                name="indicaciones_tramite"
                                value={notas}
                                onChange={(e) => {setNotas(e.target.value)}}
                                multiline
                                rows={4}
                                placeholder="Favor de dar indicaciones del tramite y agregar expedientes si se requiere"
                                style={{ width: '100%' }}
                            />
                        </Grid>
                    </Grid>
                </Grid>
            </Container>

            <Box sx={{ mb: 5 }}>
                <Button onClick={handleBack} variant='outlined' style={styles.btnBack}>Anterior</Button>
                <Button onClick={ guardarInformacion } variant='outlined' style={styles.btnNext}>Siguiente</Button>
            </Box>

        </>
    )

}

export default NewCitaStep1Servicio
