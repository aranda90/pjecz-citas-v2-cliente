import React, { useEffect, useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'

import { Box, Button, Container, FormControl, Grid, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import { GetOficinaServicio } from '../../actions/CitCitasActions'
import { types } from '../../types/types'


const NewCitaStep1Servicio = ({ handleBack, handleNext, styles }) => {

    const dispatch = useDispatch()
    const { oficina_id, servicio_id,nota, nota_id } = useSelector(state => state.citas)

    //servicios
    const [servicios, setServicios] = useState([])
    const [servicio, setServicio] = useState(0)

    //notas
    const [notas, setNotas] = useState(nota)

    const [errorMessage, setErrorMessage] = useState('')

    const handleChangeServicio = (e) => {
        setServicio(e.target.value)

    }


    const guardarInformacion = () => {
        
        if(servicio === 0){
            return false
        }else if(notas.trim() === ""){
            setErrorMessage('FALTA llenar este campo.')
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
                dispatch({ type: types.TOKEN_EXPIRED })
            }
            
        }
        fetchData()
    },[oficina_id, dispatch])

    useEffect(() => {
        if(servicio_id !== 0 ){
            setServicio(servicio_id)
        }
    },[servicio_id])

    useEffect(() => {
        if(nota_id !== 0 && nota !== 0 ){
            setNotas(nota_id)
            console.log(nota_id)
        }
    },[nota_id, nota])
    
    return (
        <>
            <Container sx={{ mt: 5, mb: 2 }}>
                <Grid container spacing={2}>
                    <Grid item md={1} xs={12}></Grid>
                    <Grid item md={5} xs={12}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <FormControl fullWidth>
                                    <InputLabel id="servicio">Tipo de trámite</InputLabel>
                                    <Select
                                        id="servicio"
                                        labelId="servicio"
                                        label="Tipo de trámite"
                                        name="servicio"
                                        value={servicio}
                                        onChange={(e) => { handleChangeServicio(e) }}
                                    >
                                        <MenuItem key='0' value='0'>Selecciona una opción</MenuItem>
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
                        <Grid item xs={12} sx={{mb:2}}>
                            <TextField
                                disabled={servicio === 0}
                                id="indicaciones_tramite"
                                label="Escriba los expedientes a revisar, las indicaciones del servicio o NINGUNO"
                                name="indicaciones_tramite"
                                multiline
                                onChange={(e) => { setNotas(e.target.value) }}
                                placeholder="Escriba los expedientes a revisar, las indicaciones del servicio o NINGUNO"
                                rows={4}
                                style={{ width: '100%' }}
                                value={notas}
                            />
                        </Grid>
                        {
                            errorMessage ? <span style={{color: '#BC0B0B', marginTop:4, inlineSize:'1620px', fontSize:18 }}>{errorMessage}</span> : null
                        }
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
