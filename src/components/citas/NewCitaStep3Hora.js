import React, { useRef, useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'

import { Box, Button, Grid, Typography } from '@mui/material'

import ReCAPTCHA  from 'react-google-recaptcha'

import { NewCit } from '../../actions/CitCitasActions'

import { types } from '../../types/types'
import { TokenExpired } from '../modals/TokenExpired'


const NewCitaStep3Hora = ({ handleBack, handleNext, styles }) => {

    const dispatch = useDispatch()

    const tab = '\u00A0'

    const { distrito, oficina_id, oficina, servicio_id, servicio, fecha, hora, nota } = useSelector( state => state.citas )
    
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

    const guardarInformacion = async () => {

        const params = {
            oficina_id: oficina_id,
            cit_servicio_id: servicio_id,
            fecha: fecha,
            hora_minuto: hora,
            notas: nota,
        }

        await NewCit(params).then( response => {
            
            if( response ){

                if( response.status === 200){
                   if(captchaValido){

                        handleNext()
                        cleanInputs()
                    }else{
                          setCaptachaValido(false)
                    }
                }else if(response.status === 401){               
                    dispatch({ type: types.TOKEN_EXPIRED });
                }
                
            }
        })
    }
 
    const cleanInputs = () => {
        dispatch({
            type:types.CLEAN_INPUTS
        })
    }

    return (
        <>
            <TokenExpired />
            <Typography variant='h5' align='center' sx={{ mt:6, mb:4, fontFamily:'serif' }}>
                <b>Revise que tu información sea correcta</b> 
            </Typography>
            <Grid container align='justify'>
                <Grid item sm={3} xs={12}></Grid>
                <Grid item sm={7} xs={12}>

                    <Typography variant='h6' sx={{mt:2,mb:2}}>
                        <b>Distrito:</b> {tab}{ distrito}
                    </Typography>
                    <Typography variant='h6' sx={{mt:2,mb:2}}>
                        <b>Oficina:</b> {tab}{oficina }               
                    </Typography>
                    <Typography variant='h6' sx={{mt:2,mb:2}} align='left'>
                        <b>Servicio:</b>{tab}{servicio }
                    </Typography>
                    <Typography variant='h6' sx={{mt:2,mb:2}}>
                        <b>Fecha:</b> {fecha} {tab}{tab}{tab}{tab}{tab}{tab}{tab}{tab} <b>Hora:</b> {hora.slice(0,-3)}
                    </Typography>
                    <Typography variant='h6' sx={{mt:2,mb:2}}>
                        <b>Nota:</b> {nota}
                    </Typography>
                
                </Grid>
                <Grid item sm={2} xs={12}></Grid>
                
            </Grid>
           <Grid container align='center' sx={{mt:5}}>
                <Grid item sm={3} xs={12}></Grid>
                <Grid item sm={6} xs={12}>

                    <Typography component={'span'} variant={'body2'}>
                        <ReCAPTCHA
                            ref={captcha}
                            sitekey='6LdL-yMgAAAAAFaW2_5KwUlT5FXJjZYaPQd7fFbP'
                            onChange={onChangeCaptcha}
                        />
                        { (captchaValido === false) ? <Typography variant='body1'>Selecciona el captcha para continuar</Typography> : null }
                    </Typography>

                </Grid>
                <Grid item sm={3} xs={12}></Grid>
            </Grid>
            <Box sx={{ mb: 5 }}>
                <Button onClick={handleBack} variant='outlined' style={styles.btnBack}>Anterior</Button>
                <Button onClick={guardarInformacion} variant='outlined' style={styles.btnNext}>Confirmar Cita</Button>
            </Box>
        </>
    )

}

export default NewCitaStep3Hora
