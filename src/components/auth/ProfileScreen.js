import React, { useEffect, useState } from 'react'
import { Container, Grid, TextField, Typography } from '@mui/material'

import ContainerCardCenter from '../ui/ContainerCardCenter'
import commonSX from '../../theme/CommonSX'
import '../../css/global.css'

import { Profile } from '../../actions/AuthActions'


const ProfileScreen = () => {

    // Revisar si hay token
    const [haveToken, setHaveToken] = useState(false)
    const token = window.localStorage.getItem('token')
    useEffect(() => {
        if (token) {
            setHaveToken(true)
        }
    }, [token])

    // Consultar Perfil
    const [consultado, setConsultado] = useState(false)
    const [profile, setProfile] = useState({
        id: null,
        nombres: '',
        apellido_primero: '',
        apellido_segundo: '',
        curp: '',
        telefono: '',
        email: '',
        username: '',
    })
    useEffect(() => {
        async function fetchData() {
            if (haveToken) {
                const response = await Profile()
                if (response.status === 200) {
                    setConsultado(true)
                    setProfile(response.data)
                }
            }
        }
        fetchData()
    }, [haveToken])

    if (consultado) {
        return (
            <Container sx={commonSX.container}>
                <Typography variant='h4' sx={commonSX.title}>
                    Perfil
                </Typography>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                            label="Nombres"
                            type="text"
                            fullWidth
                            aria-readonly
                            value={profile.nombres}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label="Apellido primero"
                            type="text"
                            fullWidth
                            aria-readonly
                            value={profile.apellido_primero}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label="Apellido segundo"
                            type="text"
                            fullWidth
                            aria-readonly
                            value={profile.apellido_segundo}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label="CURP"
                            type="text"
                            fullWidth
                            aria-readonly
                            value={profile.curp}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label="Telefono"
                            type="text"
                            fullWidth
                            aria-readonly
                            value={profile.telefono}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label="Correo electronico"
                            type="text"
                            fullWidth
                            aria-readonly
                            value={profile.email}
                        />
                    </Grid>
                </Grid>
            </Container>
        )
    } else {
        return (
            <ContainerCardCenter>
                <Typography variant='h5' sx={commonSX.title}>
                    Esta fuera del sistema
                </Typography>
            </ContainerCardCenter>
        )
    }

}

export default ProfileScreen
