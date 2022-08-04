import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { Button,  Checkbox, FormControlLabel, FormGroup, Grid, TextField, Typography } from '@mui/material'

import ContainerCardCenter from '../ui/ContainerCardCenter'
import commonSX from '../../theme/CommonSX'
import '../../css/global.css'

import { NewAccount } from '../../actions/AuthActions'
import ReCAPTCHA from 'react-google-recaptcha'


const cleanFormData = {
    nombres: '',
    apellido_primero: '',
    apellido_segundo: '',
    curp: '',
    curp2: '',
    telefono: '',
    telefono2: '',
    email: '',
    email2: '',
}

const NewAccountScreen = () => {

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
        nombres: '',
        apellido_primero: '',
        apellido_segundo: '',
        curp: '',
        curp2: '',
        telefono: '',
        telefono2: '',
        email: '',
        email2: '',
    })
    const [formSent, setFormSent] = useState(false)
    const [error, setError] = useState('')


    const handleChange = (event) => {
        const { name, value } = event.target
        setFormValues((prevState) => {
            return {
                ...prevState,
                [name]: value,
            }
        })
    }

    const submitForm = async () => {
      
       if(captchaValido){
            if(formData.email !== formData.email2){
                setError('Los correos no coinciden, revise nuevamente')
            }else if(formData.telefono !== formData.telefono2){
                setError('Los numeros telefonicos no coinciden, revise nuevamente')

            }else if(formData.curp !== formData.curp2){
                setError('Las CURP no coinciden, revise nuevamente')
            }else{

                await NewAccount(formData).then( response => {
                    if( response ){
                        
                        if( response.status === 200){
                            console.log(response)
                            setFormSent(true)
                        }
                        if(response.status === 406){
                            setError(response.data.detail)
                        }
                    }
                })
                setFormValues(cleanFormData)
            }
        }else{
            setCaptachaValido(false)
            
        }
    }

    if (formSent) {
        return (  
            <ContainerCardCenter>
                <Typography variant='h5' sx={commonSX.title}>
                    Se ha enviado tu solicitud para crear una cuenta
                </Typography>
                <Typography variant='body1'>
                    Dentro de poco recibiras un correo electrónico.
                </Typography>
                <Typography variant='body1'>
                    <Button component={Link} to='/' variant='contained'>
                        Volver a ingresar
                    </Button>
                </Typography>
            </ContainerCardCenter>    
        )
    } else {
        return (
            <ContainerCardCenter>
                <Typography variant='h5' sx={commonSX.title}>
                    Crear una nueva cuenta
                </Typography>
                <form onSubmit={(e) => e.preventDefault()}>
                    <Grid container spacing={2} sx={{ marginBottom: 2 }}>
                        <Grid item md={12} xs={12}>
                            <TextField
                                fullWidth
                                label='Nombres'
                                type='text'
                                variant='outlined'
                                name='nombres'
                                value={formData.nombres}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <TextField
                                fullWidth
                                label='Apellido paterno'
                                type='text'
                                variant='outlined'
                                name='apellido_primero'
                                value={formData.apellido_primero}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <TextField
                                fullWidth
                                label='Apellido materno'
                                type='text'
                                variant='outlined'
                                name='apellido_segundo'
                                value={formData.apellido_segundo}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <TextField
                                fullWidth
                                label='CURP'
                                type='text'
                                variant='outlined'
                                name='curp'
                                value={formData.curp}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <TextField
                                fullWidth
                                label='De nuevo el CURP'
                                type='text'
                                variant='outlined'
                                name='curp2'
                                value={formData.curp2}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <TextField
                                fullWidth
                                label='Teléfono Celular'
                                type='text'
                                variant='outlined'
                                name='telefono'
                                value={formData.telefono}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <TextField
                                fullWidth
                                label='De nuevo el Teléfono Celular'
                                type='text'
                                variant='outlined'
                                name='telefono2'
                                value={formData.telefono2}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <TextField
                                fullWidth
                                label='Correo Electrónico'
                                type='email'
                                variant='outlined'
                                name='email'
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <TextField
                                fullWidth
                                label='De nuevo el Correo Electrónico'
                                type='email'
                                variant='outlined'
                                name='email2'
                                value={formData.email2}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item md={12} xs={12}>
                            <Typography variant='body1'>
                                He leído y acepto...
                            </Typography>
                            <FormGroup>
                                <FormControlLabel
                                    control={<Checkbox />}
                                    label='Aviso de privacidad'
                                    name='aviso'
                                />
                                <FormControlLabel
                                    control={<Checkbox />}
                                    label='Términos y condiciones de uso'
                                    name='terminos'
                                />
                            </FormGroup>
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
                            error ? <span style={{color: '#BC0B0B', marginTop:4, inlineSize:'620px', fontSize:18 }}>{error}</span> : null
                        }
                        <Grid item md={12} xs={12}>
                            <Button
                                variant='contained'
                                fullWidth
                                type='submit'
                                onClick={submitForm}
                            >
                                Crear una nueva cuenta
                            </Button>
                        </Grid>
                    </Grid>
                </form>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Typography variant="body1">
                            <Link to='/' className='link'>
                                Si ya tienes una cuenta, regresa a la pagina inicial
                            </Link>
                        </Typography>
                    </Grid>
                </Grid>
            </ContainerCardCenter>
        )
    }

}

export default NewAccountScreen
