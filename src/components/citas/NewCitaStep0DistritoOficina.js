import React from 'react'
import { Container, FormControl, Grid, InputLabel, MenuItem, Select } from '@mui/material'


const NewCitaStep0DistritoOficina = () => {

    return (
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
                                >
                                    <MenuItem>Seleccionar opcion</MenuItem>
                                    <MenuItem>Seleccionar opcion 1</MenuItem>
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
                                >
                                    <MenuItem>Seleccionar opcion</MenuItem>
                                    <MenuItem>Seleccionar opcion 1</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    )

}

export default NewCitaStep0DistritoOficina
