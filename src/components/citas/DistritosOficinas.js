import React, { useEffect, useState } from 'react'
import { Container, FormControl, Grid, InputLabel, MenuItem, Select, Typography } from '@mui/material'
import { Distritos } from '../../actions/DistritoActions'
import { Oficinas } from '../../actions/OficinaActions'

import ContainerCardCenter from '../ui/ContainerCardCenter'
import commonSX from '../../theme/CommonSX'

export const DistritosOficinas = () => {
    // Consultar Distritos
    const [distritos, setDistritos] = useState([])
    const [distrito, setDistrito] = useState(0)

    const [consultado, setConsultado] = useState(false)

    // oficinas
    const [oficinas, setOficinas] = useState([])
    const [oficina, setOficina] = useState(0)

    const handleChangeDistritos = (e) => {
        
        setDistrito( e.target.value );        

    };

    useEffect(() => {
        async function fetchData() {
            const response = await Distritos()
            if(response.status === 200){
                
                setDistritos(response.data.items)
                setConsultado(true)
            }
            console.log(response)
        }
        fetchData();
    }, []);

    useEffect(() => {
        async function fetchData() {
            setOficinas( [] );
            setOficina( 0 );
            if( distrito !== 0 ){
                const response = await Oficinas( distrito );
                if(response.status === 200){
                    setOficinas(response.data.items);
                }
                console.log(response)
            }  
        }
        fetchData();
    }, [ distrito ]);

    const handleChangeOficinas = (e) => {
        setOficina(e.target.value);
    };

    if(consultado){
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
                                    value={distrito}
                                    onChange={ ( e ) => { handleChangeDistritos( e ); }}

                                >
                                    <MenuItem key={0} value={0}>Seleccione una opción</MenuItem>
                                    { distritos.map( (distrito) => 
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
                                    onChange={ ( e ) => { handleChangeOficinas( e ); }}
                                    disabled={ distrito === 0  }
                                >
                                    <MenuItem key={0} value={0}>Seleccione una opción</MenuItem>   
                                    { oficinas.map( (oficina) => 
                                        <MenuItem key={oficina.id} value={oficina.id}>
                                            { oficina.descripcion }
                                        </MenuItem>
                                    )}
                                </Select>
                            </FormControl>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
        )
    }else {
        return (
            <ContainerCardCenter>
                <Typography variant='h5' sx={commonSX.title}>
                    Esta fuera del sistema
                </Typography>
            </ContainerCardCenter>
        )
    }
}
