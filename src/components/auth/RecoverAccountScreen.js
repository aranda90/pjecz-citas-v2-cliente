import React, { useRef, useState } from 'react'
import { Button, Grid, TextField, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

import ContainerCardCenter from '../ui/ContainerCardCenter'
import commonSX from '../../theme/CommonSX'
import '../../css/global.css'

import { RecoverAccount } from '../../actions/AuthActions'
import ReCAPTCHA from 'react-google-recaptcha'


const cleanFormData = {
    email: '',
    email2: '',
}

const RecoverAccountScreen = () => {

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
        email: '',
        email2: '',
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

    const submitForm = async () => {
        if(captchaValido){
            await RecoverAccount(formData).then( response => {
                if(response){
                    if(response.status === 200){
                        console.log(response)
                        setFormSent(true)
                    }
                    if(response.status === 406){
                        setError(response.data.detail)
                    }
                } 
            })
            setFormValues(cleanFormData)
        }else{
            setCaptachaValido(false)
        }
    }

    if (formSent) {
        return (
            <ContainerCardCenter>
                <Typography variant='h5' sx={commonSX.title}>
                    Se ha enviado tu solicitud de recuperación
                </Typography>
                <Typography variant='body1'>
                    Dentro de poco recibiras un correo electrónico.
                </Typography>
                <Typography variant='body1'>
                    <Button component={Link} to='/' variant='contained'>
                        Volver a ingresar
                    </Button >
                </Typography>
            </ContainerCardCenter>
        )
    } else {
        return (
            <ContainerCardCenter>
                <Typography variant='h5' sx={commonSX.title}>
                    Recuperar mi contraseña
                </Typography>
                <form onSubmit={(e) => e.preventDefault()}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                label="Correo electrónico"
                                type="email"
                                fullWidth
                                name='email'
                                onChange={handleChange}
                                value={formData.email}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Correo electrónico"
                                type="email"
                                fullWidth
                                name='email2'
                                onChange={handleChange}
                                value={formData.email2}
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
                        {
                            error ? <span style={{color: '#BC0B0B', marginTop:4, inlineSize:'620px', fontSize:18 }}>{error}</span> : null
                        }
                        <Grid item xs={12}>
                            <Button
                                variant='contained'
                                fullWidth
                                type='submit'
                                onClick={submitForm}
                            >
                                Recuperar
                            </Button>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant='body1'>
                                <Link to='/' className='link'>
                                    Si ya tienes tu cuenta, regresa al inicio
                                </Link>
                            </Typography>
                        </Grid>
                    </Grid>
                </form>
            </ContainerCardCenter>
        )
    }

}

export default RecoverAccountScreen
