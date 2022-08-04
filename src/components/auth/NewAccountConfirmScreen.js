import React, { useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Button, Grid, Input, TextField, Typography } from '@mui/material'

import ContainerCardCenter from '../ui/ContainerCardCenter'
import commonSX from '../../theme/CommonSX'
import '../../css/global.css'

import { NewAccountConfirm } from '../../actions/AuthActions'
import ReCAPTCHA from 'react-google-recaptcha'

const cleanFormData = {
    password: '',
    password2: ''
}

const NewAccountConfirmScreen = () => {

    let {search} = useLocation()
    let parametros = new URLSearchParams(search)
    let hashid = parametros.get('hashid')
    let cadena_validar = parametros.get('cadena_validar')

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
        password: '',
        password2: '',
        hashid: hashid,
        cadena_validar:cadena_validar,
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
        if(formData.password !== formData.password2){
            setError('Las Contraseñas no coiniciden, escribir nuevamente')
        }else if(captchaValido){
            
                
                await NewAccountConfirm(formData).then( response => {
                    if( response ){
                        
                        if( response.status === 200){
                            console.log(response)
                        }
                       
                        setError('La contraseña no es correcta')
                    }
                
                })
                setFormValues(cleanFormData)
                setFormSent(true)

        }else{
            setCaptachaValido(false)
            setError('')
        }
        
    }

    if (formSent) {       
        return(
            <ContainerCardCenter>
                <Typography variant='h5' sx={commonSX.title}>
                    Ha creado su cuenta correctamente
                </Typography>
                <Typography variant='body1'>
                    Tome nota de su contraseña y guardela en un lugar seguro.
                </Typography>
                <Typography variant='body1'>
                    <Button component={Link} to='/login' variant='contained'>
                        Iniciar Sesión
                    </Button>
                </Typography>
            </ContainerCardCenter>
        )
    
    }else {
        return (
            <ContainerCardCenter>
                <Typography variant='h5' sx={commonSX.title}>
                    Validar mi correo electrónico y definir mi contraseña
                </Typography>
                <form onSubmit={(e) => e.preventDefault()}>
                    <Grid item xs={12}>
                        <span style={{color:'#8B1818', fontSize:14}}>La contraseña debe tener de 8 a 24 caracteres, comenzando con una letra y contener por lo menos una mayúscula y un número</span>
                    </Grid>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                label="Crear Contraseña"
                                type="password"
                                fullWidth
                                name='password'
                                onChange={handleChange}
                                value={formData.password}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Confirmar Contraseña"
                                type="password"
                                fullWidth
                                name='password2'
                                onChange={handleChange}
                                value={formData.password2}
                            />
                        </Grid>
                        <Grid item md={12} xs={12}>
                            <Typography component={'span'} variant={'body2'}>
                                <ReCAPTCHA
                                    ref={captcha}
                                    sitekey='6LdL-yMgAAAAAFaW2_5KwUlT5FXJjZYaPQd7fFbP'
                                    onChange={onChangeCaptcha}
                                    />
                                { (captchaValido === false) ? <Typography variant='body1'>Seleccione el captcha para continuar</Typography> : null }
                            </Typography>
                        </Grid>
                        {
                            error ? <span style={{color: '#BC0B0B', marginTop:4, inlineSize:'620px' }}>{error}</span> : null
                        }
                        <Grid item xs={12}>
                            <Button
                                variant='contained'
                                fullWidth
                                type='submit'
                                onClick={submitForm}
                            >
                                Definir mi contraseña
                            </Button>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant='body1'>
                                <Link to='/' className='link'>
                                    Si no necesitas hacer esto, regresa al inicio
                                </Link>
                            </Typography>
                        </Grid>
                    </Grid>
                    <Input
                        type="hidden"
                        value={hashid}
                        name="hashid"
                    />
                    <Input
                        type="hidden"
                        value={cadena_validar}
                        name="cadena_validar"
                    />
                </form>
            </ContainerCardCenter>
        )
    }

}

export default NewAccountConfirmScreen
