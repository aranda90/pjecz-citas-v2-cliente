import React, { useState } from 'react'
import axios from 'axios'
import { Button, Card, Container, Grid, TextField, Typography } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import { commonSX } from '../ui/commonSX'
import '../../css/global.css'


const cleanFormData = {
    username: '',
    password: '',
}

export const LoginScreen = () => {

    let navigate = useNavigate()

    const [formData, setFormValues] = useState({
        username: '',
        password: '',
    })
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [isError, setIsError] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')

    const handleChange = (event) => {
        const { name, value } = event.target
        setFormValues((prevState) => {
            return {
                ...prevState,
                [name]: value,
            }
        })
    }

    const submitForm = () => {
        // Enviar formulario para iniciar sesion
        const headers = {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
        const params = new URLSearchParams()
        params.append('username', formData.username)
        params.append('password', formData.password)
        axios.post('/token', params, headers).then( result => {
            if (result.status === 200) {
                // Exito, redirigir
                navigate('/list')
                window.localStorage.setItem('token', result.data.access_token)
                setIsLoggedIn(true)
            } else {
                // ERROR fatal en inicio de sesion
                setIsError(true)
                setErrorMessage('ERROR fatal en inicio de sesion')
            }
        })
        .catch( error => {
            // FALLO el inicio de sesion, mostrar el mensaje de la API
            setIsError(true)
            setErrorMessage(error.response.data.detail)
        })
        // Limpiar formulario
        setFormValues(cleanFormData)
    }

    if (isLoggedIn) {
        return (
            <Container sx={commonSX.container}>
                <Grid container spacing={2}>
                    <Grid item md={3} xs={12}></Grid>
                    <Grid item md={6} xs={12}>
                        <Card align='center' sx={{ padding: 4 }}>
                            <Typography variant='h5' sx={commonSX.title}>
                                Bienvenido
                            </Typography>
                        </Card>
                    </Grid>
                    <Grid item md={3} xs={12}></Grid>
                </Grid>
            </Container>
        )
    } else if (isError) {
        return (
            <Container sx={commonSX.container}>
                <Grid container spacing={2}>
                    <Grid item md={3} xs={12}></Grid>
                    <Grid item md={6} xs={12}>
                        <Card align='center' sx={{ padding: 4 }}>
                            <Typography variant='h5' sx={commonSX.title}>
                                Error al tratar de ingresar
                            </Typography>
                            <Typography variant='body1'>
                                {errorMessage}
                            </Typography>
                        </Card>
                    </Grid>
                    <Grid item md={3} xs={12}></Grid>
                </Grid>
            </Container>
        )
    } else {
        return (
            <Container sx={commonSX.container}>
                <Grid container spacing={2}>
                    <Grid item md={3} xs={12}></Grid>
                    <Grid item md={6} xs={12}>
                        <Card align='center' sx={{ padding: 4 }}>
                            <Typography variant='h5' sx={commonSX.title}>
                                Ingresar al Sistema de Citas
                            </Typography>
                            <form onSubmit={(e) => e.preventDefault()}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12}>
                                        <TextField
                                            label="Correo electronico"
                                            type="email"
                                            fullWidth
                                            name="username"
                                            value={formData.username}
                                            onChange={handleChange}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            label="Contraseña"
                                            type="password"
                                            fullWidth
                                            name="password"
                                            value={formData.password}
                                            onChange={handleChange}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Card variant='outlined'>
                                            <Typography variant='body1'>
                                                No soy un robot
                                            </Typography>
                                        </Card>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Button
                                            variant='contained'
                                            fullWidth
                                            type='submit'
                                            onClick={submitForm}
                                        >
                                            Ingresar
                                        </Button>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Typography variant='body1'>
                                            <Link to='/recover_account' className='link'>
                                                Olvide mi contrasena
                                            </Link>
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Typography variant='body1'>
                                            <Link to='/new_account' className='link'>
                                                Quiero crear una nueva cuenta
                                            </Link>
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </form>
                        </Card>
                    </Grid>
                    <Grid item md={3} xs={12}></Grid>
                </Grid>
            </Container>
        )
    }

}
