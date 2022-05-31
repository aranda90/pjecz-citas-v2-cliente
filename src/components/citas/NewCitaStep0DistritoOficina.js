import React, { useEffect, useState } from 'react'
import { Box, Button, Container, FormControl, Grid, InputLabel, MenuItem, Select } from '@mui/material'
import { GetDistritos, GetOficinas } from '../../actions/CitCitasActions'


const NewCitaStep0DistritoOficina = ({ handleNext, styles, props }) => {

    // Distrios
    const [distritos, setDistritos] = useState([])
    const [distrito, setDistrito] = useState(0)

    // Oficinas
    const [oficinas, setOficinas] = useState([])
    const [oficina, setOficina] = useState(0)

    const handleChangeDistrito = (e) => {
        setDistrito(e.target.value)
        console.log(e.target.value)
    }

    const handleChangeOficina = (e) => {
        setOficina(e.target.value)
        console.log(e.target.value)
    }
    const guardarInformacion = () =>{
        console.log("Hola estoy guardando")
        handleNext()
    }

    // Distritos
    useEffect(() => {
        async function fetchData(){
            const response = await GetDistritos()
            if(response.status === 200){
                setDistritos(response.data.items)
            }
            console.log(response)
        }
        fetchData()
    },[])

    // Oficinas
    useEffect(() => {
        async function fetchData(){
            setOficinas([])
            setOficina(0)

            if(distrito !== 0){
                const response = await GetOficinas(distrito)
                if(response.status === 200){
                    setOficinas(response.data.items)
                }
                console.log(response)
            }

        }
        fetchData()
    },[distrito])
   
    return (
        <>
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
                                        <MenuItem key={0} value={0}>Seleccionar una opción</MenuItem>
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
                                    >
                                        <MenuItem key={0} value={0}>Seleccionar una opción</MenuItem>
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
