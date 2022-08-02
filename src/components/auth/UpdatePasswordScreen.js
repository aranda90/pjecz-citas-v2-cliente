import React, { useRef, useState } from 'react'

import { Link } from 'react-router-dom'

import { Button, Grid, TextField, Typography } from '@mui/material'

import ReCAPTCHA from 'react-google-recaptcha'

import { UpdatePassConfirm } from '../../actions/AuthActions'

import commonSX from '../../theme/CommonSX'

import ContainerCardCenter from '../ui/ContainerCardCenter'

const cleanFormData = {
    contrasena_anterior: '',
    contrasena_nueva: '',
    contrasena_nueva2: '',
}

const UpdatePasswordScreen = () => {

    
    // const {  username } = useSelector( state => state.auth )
    // console.log(username)

    // variables de estado para captcha
    const [captchaValido, setCaptachaValido] = useState(null)

    // Referencia al checkbox 'recaptcha'
    const captcha = useRef(null)

    // Funcion de evento onChange
    const onChangeCaptcha = () => {
        if(captcha.current.getValue()){
            setCaptachaValido(true)
        }
    }

    const [formData, setFormValues] = useState({
        contrasena_anterior: '',
        contrasena_nueva: '',
        contrasena_nueva2: '',
        email: '',
    })

    const [formSent, setFormSent] = useState(false)

    const [error, setError] = useState('')


    const handleChange = (evento) => {
        const { name, value } = evento.target
        setFormValues((prevState) => {
            return {
                ...prevState,
                [name]: value,
            }
        })
    }

    const submitForm = async() => {
        if(formData.contrasena_nueva !== formData.contrasena_nueva2){
            setError('Las Contraseñas no coiniciden, escribir nuevamente')
        }else if(captchaValido){
            await UpdatePassConfirm(formData).then( response => {
                if(response){
                    if(response.status === 200){
                        console.log(response)
                        
                    }else {
                        
                        setError(response.data.detail)
                    }
                }
                
            })
            setFormSent(true)
            setFormValues(cleanFormData)
        }else{
            setCaptachaValido(false)
        }
    }
    if (formSent) {
        return (
            <ContainerCardCenter>
                <Typography variant='h5' sx={commonSX.title}>
                    Ha actualizado su contraseña
                </Typography>
                <Typography variant='body1'>
                    Tome nota de su nueva contraseña y guardela en un lugar seguro.
                </Typography>
                <Typography variant='body1'>
                    <Button component={Link} to='/login' variant='contained'>
                        Volver a ingresar
                    </Button>
                </Typography>
            </ContainerCardCenter>
        )
    } else {
        return (
            <>
            <ContainerCardCenter>
                <Typography variant='h5' sx={commonSX.title}>
                    Actualizar mi contraseña
                </Typography>
                <form onSubmit={(e) => e.preventDefault()}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="Correo electrónico"
                                name='email'
                                placeholder="Escribe tu correo electrónico"
                                type="text"
                                onChange={handleChange}
                                value={formData.email}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="Contraseña actual"
                                name='contrasena_anterior'
                                placeholder="Escribir contraseña que usa actualmente"
                                type="password"
                                onChange={handleChange}
                                value={formData.contrasena_anterior}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <span style={{color:'#8B1818', fontSize:14}}>La contraseña debe tener de 8 a 24 caracteres, comenzando con una letra y contener por lo menos una mayúscula y un número</span>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Nueva contraseña"
                                type="password"
                                fullWidth
                                name='contrasena_nueva'
                                placeholder="Escribir una nueva contraseña "
                                onChange={handleChange}
                                value={formData.contrasena_nueva}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Confirmar nueva contraseña"
                                type="password"
                                fullWidth
                                name='contrasena_nueva2'
                                placeholder="Confirmar su nueva contraseña"
                                onChange={handleChange}
                                value={formData.contrasena_nueva2}
                            />
                        </Grid>
                        {
                            error ? <span style={{color: '#BC0B0B', marginTop:4, inlineSize:'620px' }}>{error}</span> : null
                        }
                        <Grid item xs={12}>

                            <Typography component={'span'} variant={'body2'}>
                                <ReCAPTCHA
                                    ref={captcha}
                                    sitekey='6LdL-yMgAAAAAFaW2_5KwUlT5FXJjZYaPQd7fFbP'
                                    onChange={onChangeCaptcha}
                                />
                                { (captchaValido === false) ? <Typography variant='body1'>Seleccione el captcha para continuar</Typography> : null }
                            </Typography>

                        </Grid>
                        <Grid item xs={12}>
                            <Button
                                variant='contained'
                                fullWidth
                                onClick={submitForm}
                            >
                                Actualizar mi contraseña
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </ContainerCardCenter>
            </>
        )
    }
}

export default UpdatePasswordScreen