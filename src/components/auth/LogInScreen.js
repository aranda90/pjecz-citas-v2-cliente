import React, { useState, useRef } from 'react'

import { useSelector, useDispatch } from 'react-redux'

import ReCAPTCHA  from 'react-google-recaptcha'

import { Link, useNavigate } from 'react-router-dom'

import {  Button, Grid, IconButton, InputAdornment, TextField, Typography } from '@mui/material'

import ContainerCardCenter from '../ui/ContainerCardCenter'

import commonSX from '../../theme/CommonSX'

import '../../css/global.css'

import { LogIn } from '../../actions/AuthActions'
import { Profile } from '../../actions/AuthActions'

import { types } from '../../types/types'

import { Visibility } from '@mui/icons-material'
import { VisibilityOff } from '@mui/icons-material'

const cleanFormData = {
    username: '',
    password: '',
}

const LoginScreen = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate()

    // Variable de estado para captcha
    const [captchaValido, setCaptchaValido] = useState(null)

    // Referencia al checkbox 'recaptcha'
    const captcha = useRef(null)

    // Funcion de evento onChange
    const onchange = () => {
        if (captcha.current.getValue()) {
            setCaptchaValido(true)
        } 
    }

    // Obtener el contexto del cliente
    const { isAuthenticated } = useSelector( state => state.auth )

    // Formulario
    const [formData, setFormValues] = useState({
        username: '',
        password: '',
        showPassword: false,
    })
    //const [isError, setIsError] = useState(false)
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

    // Ver contraseña
    const handleClickShowPassword = () => {
        setFormValues((prevState) => {
            return {

                ...prevState,
                showPassword: !formData.showPassword,
            }
        })
    }

    const handleMouseDownPassword = (event) => {
        event.preventDefault()
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
                        })

                        navigate('/citas');
                    }           
                    
                } else {
                    setErrorMessage(response.data.detail)
                }
            })
            setFormValues(cleanFormData)
            //setIsError(true)
        }
        else{
            setCaptchaValido(false)
        }
    }

    if ( !isAuthenticated ) {
       
        return (
            <ContainerCardCenter sx={{mb:15}}>
                <Typography variant='h5' sx={commonSX.title}>
                    Ingresar al Sistema de Citas
                </Typography>
                <form onSubmit={(e) => e.preventDefault()}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                label="Correo electrónico"
                                type="email"
                                fullWidth
                                name="username"
                                placeholder='Escribe tu correo electrónico'
                                value={formData.username}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <span style={{color:'#8B1818', fontSize:14}}>La contraseña debe tener de 8 a 24 caracteres, comenzando con una letra y contener por lo menos una mayúscula y un número</span>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Contraseña"
                                type={formData.showPassword ? 'text' : 'password'}
                                fullWidth
                                name="password"
                                placeholder='Escribe tu contraseña'
                                value={formData.password}
                                onChange={handleChange}
                                InputProps={{
                                    endAdornment:(

                                    <InputAdornment position="end">
                                        <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                        >
                                        {formData.showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                    )
                                }}
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
                        {
                            errorMessage ? <span style={{color: '#BC0B0B', marginTop:4, inlineSize:'620px', fontSize:18 }}>{errorMessage}</span> : null
                        }
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
                                    Recuperar mi contraseña
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