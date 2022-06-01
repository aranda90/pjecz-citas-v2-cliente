import React, { useContext, useState, useRef } from 'react'
import ReCAPTCHA  from 'react-google-recaptcha'
import { Link } from 'react-router-dom'
import { Button, Grid, TextField, Typography } from '@mui/material'

import CitClienteContext from '../../context/citcliente/CitClienteContext'

import ContainerCardCenter from '../ui/ContainerCardCenter'
import commonSX from '../../theme/CommonSX'
import '../../css/global.css'

import { LogIn } from '../../actions/AuthActions'


const cleanFormData = {
    username: '',
    password: '',
}

const LoginScreen = () => {

    // Variable de estado para captcha
    const [captchaValido, setCaptchaValido] = useState(null)

    // Referencia al checkbox 'recaptcha'
    const captcha = useRef(null)

    // Funcion de evento onChange
    const onchange = () => {
        if (captcha.current.getValue()) {
            setCaptchaValido(true) ;
            console.log("google regreso un token y no es un robot") ;
        } else {
            console.log("Detectado como robot") ;
        }
    }

    // Obtener el contexto del cliente
    const { isLogged, username, setLogInCitCliente } = useContext(CitClienteContext)

    // Formulario
    const [formData, setFormValues] = useState({
        username: '',
        password: '',
    })
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

    // Enviar el formulario
    //const navigate = useNavigate()
    const submitForm = () => {
        if(captchaValido){
            LogIn(formData).then((response) => {
                if (response.status === 200) {
                    const { data } = response
                    window.localStorage.setItem('token', data.access_token) // Guardar el token
                    setLogInCitCliente() // Actualizar contexto
                    console.log(isLogged, username)
                    //navigate('/') // Redirigir al listado de citas
                } else {
                    setIsError(true)
                    setErrorMessage(response.data.detail)
                }
            })
            setFormValues(cleanFormData)
        }
        else{
            setCaptchaValido(false) ;
        }
    }

    if (isLogged) {
        return (
            <ContainerCardCenter>
                <Typography variant='h5' sx={commonSX.title}>
                    Bienvenido {username}
                </Typography>
            </ContainerCardCenter>
        )
    } else if (isError) {
        return (
            <ContainerCardCenter>
                <Typography variant='h5' sx={commonSX.title}>
                    Error al tratar de ingresar
                </Typography>
                <Typography variant='body1'>
                    {errorMessage}
                </Typography>
            </ContainerCardCenter>
        )
    } else {
        return (
            <ContainerCardCenter>
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
                            <Typography component={'span'} variant={'body2'}>
                                <ReCAPTCHA
                                    ref={captcha}
                                    sitekey='6LdL-yMgAAAAAFaW2_5KwUlT5FXJjZYaPQd7fFbP'
                                    onChange={onchange}
                                />
                                { (captchaValido === false) ? <Typography variant='body1'>Seleccione el captcha para continuar</Typography> : null }
                            </Typography>
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
            </ContainerCardCenter>
        )
    }

}

export default LoginScreen
