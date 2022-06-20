import React, { useEffect, useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'

import { Box, Button, Container, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
import { GetOficinaServicio } from '../../actions/CitCitasActions'
import { types } from '../../types/types'


const NewCitaStep1Servicio = ({ handleBack, handleNext, styles }) => {

    const dispatch = useDispatch()
    const { oficina_id, servicio_id } = useSelector(state => state.citas)

    //servicios
    const [servicios, setServicios] = useState([])
    const [servicio, setServicio] = useState(0)

    const handleChangeServicio = (e) => {
        setServicio(e.target.value)
        console.log(e.target.value)
    }

    const guardarInformacion = () => {

        if(servicio === 0){
            return false;
        }

        dispatch({
            type: types.SET_PASO_1,
            payload:{
                servicio_id: servicio,
                servicio: servicios.find((element) => { return element.cit_servicio_id === servicio }).cit_servicio_descripcion,
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
            }
            console.log(response)
        }
        fetchData()
    },[oficina_id])

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
                                id="indiaciones_tramite"
                                label="Indicaciones del tramite"
                                name="indiciaciones_tramite"
                                multiline
                                rows={4}
                                placeholder="Favor de dar indicaciones del tramite"
                                style={{ width: '100%' }}
                            />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container spacing={2}>
                    <Grid item md={1} xs={12}></Grid>
                    <Grid item md={5} xs={12}>
                        {/*if servicios.desripcion !== 'EXPEDIENTE VIRTUAL'*/}
                        <Grid item xs={12}>
                            <Typography sx={{ fontWeight: 500 }}>
                                Expedientes / Folios
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                id="outlined-textarea"
                                label="Expediente Ej. F350/2022"
                                placeholder="Expedientes"
                                name='expediente_uno'
                                variant='standard'
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                id="outlined-textarea"
                                label="Expediente Ej. E250/2022"
                                placeholder="Expedientes"
                                name='expediente_dos'
                                variant='standard'
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                id="outlined-textarea"
                                label="Expediente Ej. F50/2022"
                                placeholder="Expedientes"
                                name='expediente_tres'
                                variant='standard'
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                id="outlined-textarea"
                                label="Expediente Ej. E70/2022"
                                placeholder="Expedientes"
                                name='expediente_cuatro'
                                variant='standard'
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                id="outlined-textarea"
                                label="Expediente Ej. F30/2022"
                                placeholder="Expedientes"
                                name='expediente_cinco'
                                variant='standard'
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
