import React, { useState, useRef } from 'react'

import { useSelector, useDispatch } from 'react-redux'

import ReCAPTCHA  from 'react-google-recaptcha'

import { Link } from 'react-router-dom'

import { Button, Grid, TextField, Typography } from '@mui/material'

import ContainerCardCenter from '../ui/ContainerCardCenter'

import commonSX from '../../theme/CommonSX'

import '../../css/global.css'

import { LogIn } from '../../actions/AuthActions'
import { Profile } from '../../actions/AuthActions'

import { types } from '../../types/types';

const cleanFormData = {
    username: '',
    password: '',
}

const LoginScreen = () => {

    const dispatch = useDispatch();

    // Variable de estado para captcha
    const [captchaValido, setCaptchaValido] = useState(null)

    // Referencia al checkbox 'recaptcha'
    const captcha = useRef(null)

    // Funcion de evento onChange
    const onchange = () => {
        if (captcha.current.getValue()) {
            setCaptchaValido(true)
            console.log("google regreso un token y no es un robot")
        } else {
            console.log("Detectado como robot")
        }
    }

    // Obtener el contexto del cliente
    const { isAuthenticated, username } = useSelector( state => state.auth )

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
            LogIn(formData).then( async ( response ) => {
                if (response.status === 200) {
                    
                    const { data } = response     

                    if( data.access_token ){

                        window.localStorage.setItem('token', data.access_token) // Guardar el token
                        
                        const responseProfile = await Profile()
            
                        dispatch({
                            type: types.SET_LOG_IN_CIT_CLIENTE,
                            payload: {
                                token: data.access_token,
                                isAuthenticated: true,
                                username: responseProfile.status === 200 ? responseProfile.data.username : ''
                            }
                        });    
                    }           

                } else {
                    setIsError(true)
                    setErrorMessage(response.data.detail)
                }
            })
            setFormValues(cleanFormData)
        }
        else{
            setCaptchaValido(false)
        }
    }

    if ( isAuthenticated ) {
        return (
            <ContainerCardCenter>
                <Typography variant='h5' sx={commonSX.title}>
                    Bienvenido { username }
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
