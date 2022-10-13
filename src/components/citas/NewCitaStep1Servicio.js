import React, { useEffect, useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'

import { Alert, Box, Button, Container, FormControl, Grid, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import { GetOficinaServicio } from '../../actions/CitCitasActions'
import { types } from '../../types/types'
import { WifiTetheringErrorRoundedSharp } from '@mui/icons-material'


const NewCitaStep1Servicio = ({ handleBack, handleNext, styles }) => {

    const dispatch = useDispatch()
    const { oficina_id, servicio_id,nota, nota_id, expedienteStat, notatemp, expediente1, expediente2, expediente3, expediente4, expediente5 } = useSelector(state => state.citas)

    //servicios
    const [servicios, setServicios] = useState([])
    const [servicio, setServicio] = useState(0)
    const [expedienteStatus, setExpedienteStatus] = useState(expedienteStat)
   
    const [exp1, setExp1] = useState("");
    const [exp2, setExp2] = useState("");
    const [exp3, setExp3] = useState("");
    const [exp4, setExp4] = useState("");
    const [exp5, setExp5] = useState("");

    //notas
    const [notas, setNotas] = useState(nota)
    const [notastemp, setNotastemp] = useState(notatemp)

    // Mensaje error
    const [errores, setErrores] = useState("")
    const [erroresServ, setErroresServ] = useState("")

    const handleChangeServicio = (e) => {
        
        if(e.target.value === 2){
            setExpedienteStatus(true)
        }else{
            setExpedienteStatus(false)
        }
        setServicio(e.target.value)
        
    }
    
   


    const guardarInformacion = () => {
        
        
        let expnota = ""

        if(servicio === 0){
            setErroresServ('Debes seleccionar un trámite')
            return false
        }else if(expedienteStatus){
              
            if(exp1.trim() !== ""){ 
                if(expnota.trim() !== ""){ 
                    expnota = expnota + ", " + exp1 
                }else{ 
                    expnota = expnota + exp1 
                }
            }

            if(exp2.trim() !== ""){ 
                if(expnota.trim() !== ""){ 
                    expnota = expnota + ", " + exp2 
                }else{ 
                    expnota = expnota + exp2 
                }
            }

            if(exp3.trim() !== ""){ 
                if(expnota.trim() !== ""){ 
                    expnota = expnota + ", " + exp3 
                }else{ 
                    expnota = expnota + exp3 
                }
            }

            if(exp4.trim() !== ""){ 
                if(expnota.trim() !== ""){ 
                    expnota = expnota + ", " + exp4 
                }else{ 
                    expnota = expnota + exp4 
                }
            }

            if(exp5.trim() !== ""){ 
                if(expnota.trim() !== ""){ 
                    expnota = expnota + ", " + exp5 
                }else{ 
                    expnota = expnota + exp5
                }
            }
            
            if(expnota.trim() === ""){
                setErrores('Falta llenar al menos un expediente')
                return false
            }
            setNotas(expnota)
            
        }else{ 
            if(notastemp.trim() === ""){
                setErrores('FALTA llenar este campo.')
                return false
            }else{
                expnota = notastemp;
            }
        }

        setNotas(expnota)

        dispatch({
            type: types.SET_PASO_1,
            payload:{
                servicio_id: servicio,
                servicio: servicios.find((element) => { return element.cit_servicio_id === servicio }).cit_servicio_descripcion,
                nota_id: notas,
                nota:expnota,
                expedienteStat:expedienteStatus,
                expediente1:exp1,
                expediente2:exp2,
                expediente3:exp3,
                expediente4:exp4,
                expediente5:exp5,
                notatemp:notastemp,
                
            }
            
        })

        setErrores(errores, erroresServ)
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


    useEffect(() => {
        if(expediente1 !== "" ){
            setExp1(expediente1)
            console.log(expediente1)
        }
    },[expediente1])

    useEffect(() => {
        if(expediente2 !== "" ){
            setExp2(expediente2)
            console.log(expediente2)
        }
    },[expediente2])

    useEffect(() => {
        if(expediente3 !== "" ){
            setExp3(expediente3)
            console.log(expediente3)
        }
    },[expediente3])

    useEffect(() => {
        if(expediente4 !== "" ){
            setExp4(expediente4)
            console.log(expediente4)
        }
    },[expediente4])

    useEffect(() => {
        if(expediente5 !== "" ){
            setExp5(expediente5)
            console.log(expediente5)
        }
    },[expediente5])


    
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
                                {
                                    erroresServ
                                    &&
                                    <Alert severity='warning' variant='filled' sx={{ mt: 1 }}>
                                        {erroresServ}
                                    </Alert>
                                }
                            </Grid>
                        </Grid>
                    </Grid>
                    
                    <Grid item md={5} xs={12}>
                        <Grid item xs={12} sx={{mb:2}}>
                        {
                            servicio === 2 
                        ? 
                            
                            <>
                                <TextField
                                    id='expediente1'
                                    label="Expediente"
                                    name='expediente1'
                                    placeholder='352/2022'
                                    variant="standard"
                                    value={exp1}
                                    onChange={ (e) => { setExp1(e.target.value) } }
                                    sx={{ mb:2 }}

                                />

                                <TextField
                                    id='expediente2'
                                    label="Expediente"
                                    name='expediente2'
                                    variant="standard"
                                    placeholder='353/2022'
                                    value={exp2}
                                    onChange={ (e) => { setExp2(e.target.value) } }
                                    sx={{ mb:2 }}
                                />
 
                                <TextField
                                    id='expediente3'
                                    label="Expediente"
                                    name='expediente3'
                                    variant="standard"
                                    placeholder='354/2022'
                                    value={exp3}
                                    onChange={ (e) => { setExp3(e.target.value) } }
                                    sx={{ mb:2 }}
                                />

                                <TextField
                                    id='expediente4'
                                    label="Expediente"
                                    name='expediente4'
                                    variant="standard"
                                    placeholder='355/2022'
                                    value={exp4}
                                    onChange={ (e) => { setExp4(e.target.value) } }
                                    sx={{ mb:2 }}
                                />

                                <TextField
                                    id='expediente5'
                                    label="Expediente"
                                    name='expediente5'
                                    variant="standard"
                                    placeholder='356/2022'
                                    value={exp5}
                                    onChange={ (e) => { setExp5(e.target.value) } }
                                /> 

                                {
                                    errores
                                    &&
                                    <Alert severity='warning' variant='filled' sx={{ mt: 1 }}>
                                        {errores}
                                    </Alert>
                                }
                            
                            </> 
                            
                        : 
                          
                            <>
                                <TextField
                                    disabled={servicio === 0}
                                    id="indicaciones_tramite"
                                    label="Escriba las indicaciones del servicio o NINGUNO"
                                    name="indicaciones_tramite"
                                    multiline
                                    placeholder="Escriba las indicaciones del servicio o NINGUNO"
                                    rows={4}
                                    style={{ width: '100%' }}
                                    value={notastemp}
                                    onChange={(e) => { setNotastemp(e.target.value) }}
                                />

                                {
                                    errores
                                    &&
                                    <Alert severity='warning' variant='filled' sx={{ mt: 1 }}>
                                        {errores}
                                    </Alert>
                                }

                            </>
                        }

                        </Grid>
                        {/* {
                            errorMessage ? <span style={{color: '#BC0B0B', marginTop:4, inlineSize:'1620px', fontSize:18 }}>{errorMessage}</span> : null
                        } */}
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
