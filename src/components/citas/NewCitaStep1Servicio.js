import React from 'react'

import { Container, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'

const NewCitaStep1Servicio = () => {

    return (
        <Container sx={{ mt: 5, mb: 2 }}>
            <Grid container spacing={2}>
                <Grid item md={1} xs={12}></Grid>
                <Grid item md={5} xs={12}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <FormControl fullWidth>
                                <InputLabel id="tamite_tipo">Tipo de tramite</InputLabel>
                                <Select
                                    id="tamite_tipo"
                                    labelId="tamite_tipo"
                                    label="Tipo de tramite"
                                    name="tamite_tipo"
                                >
                                    <MenuItem>Seleccionar opcion</MenuItem>
                                    <MenuItem>Seleccionar opcion 1</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item md={5} xs={12}>
                    <Grid item xs={12}>
                        <TextField
                            id="indiaciones_tramite"
                            label="Indicaiciones del tramite"
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
    )

}

export default NewCitaStep1Servicio
