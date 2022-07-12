import { Button, Grid, TextField, Typography } from '@mui/material'

import React, { useRef, useState } from 'react'

import ReCAPTCHA from 'react-google-recaptcha'

import { Link } from 'react-router-dom'

import { UpdatePassConfirm } from '../../actions/AuthActions'

import commonSX from '../../theme/CommonSX'

import ContainerCardCenter from '../ui/ContainerCardCenter'

const cleanFormData = {
    updatepassword: '',
    updatepassword2: '',
    updatepassword3: '',
}

const UpdatePasswordScreen = () => {

    // variables de estado para captcha
    const [captchaValido, setCaptachaValido] = useState(null)

    // Referencia al checkbox 'recaptcha'
    const captcha = useRef(null)

    // Funcion de evento onChange
    const onChangeCaptcha = () => {
        if(captcha.current.getValue()){
            setCaptachaValido(true)
            console.log("google regreso un token y no es un robot")
        }else{
            console.log("Detectado como robot")
        }
    }

    const [formData, setFormValues] = useState({
        updatepassword: '',
        updatepassword2: '',
        updatepassword3: '',
    })

    const [formSent, setFormSent] = useState(false)


    const handleChange = (evento) => {
        const { name, value } = evento.target
        setFormValues((prevState) => {
            return {
                ...prevState,
                [name]: value,
            }
        })
    }

    const submitForm = () => {
       UpdatePassConfirm(formData).then( response => {
            if(captchaValido){
                console.log(response)
            }else{
                setCaptachaValido(false)
            }
        })
        setFormValues(cleanFormData)
        setFormSent(true)
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
                    <Link to='/login' className='link'>
                        Regresar al inicio
                    </Link>
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
                                        label="Contraseña actual"
                                        type="password"
                                        fullWidth
                                        name='password'
                                        onChange={handleChange}
                                        placeholder="Escribir contraseña que tiene actualmente"
                                        value={formData.updatepassword}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        label="Nueva contraseña"
                                        type="password"
                                        fullWidth
                                        name='password2'
                                        onChange={handleChange}
                                        placeholder="Escribir una nueva contraseña"
                                        value={formData.updatepassword2}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        label="Confirmar nueva contraseña"
                                        type="password"
                                        fullWidth
                                        name='password2'
                                        onChange={handleChange}
                                        placeholder="Confirmar su nueva contraseña"
                                        value={formData.updatepassword3}
                                    />
                                </Grid>
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
                                        type='submit'
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