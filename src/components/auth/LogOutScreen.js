import React from 'react'

import { Link, useNavigate } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux';

import { Button, Typography } from '@mui/material'

import ContainerCardCenter from '../ui/ContainerCardCenter'

import commonSX from '../../theme/CommonSX'

import '../../css/global.css'

import { types } from '../../types/types'

const LogOutScreen = () => {

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const { isAuthenticated } = useSelector( state => state.auth );

    // Salir de la sesion
    const logOut = () => {

        window.localStorage.clear() // Eliminar el token
        
        dispatch({
            type: types.SET_LOG_OUT_CIT_CLIENTE,
        });    

        navigate('/');
    }

    if ( isAuthenticated ) {
        return (
            <ContainerCardCenter>
                <Typography variant='h5' sx={commonSX.title}>
                    Salir del sistema
                </Typography>
                <Button
                    variant='contained'
                    fullWidth
                    type='button'
                    onClick={logOut}
                >
                    Salir
                </Button>
            </ContainerCardCenter>
        )
    } else {
        return (
            <ContainerCardCenter>
                <Typography variant='h5' sx={commonSX.title}>
                    Esta fuera del sistema
                </Typography>
                <Link to='/' className='link'>
                    <Typography variant='body1'>
                        Volver al inicio
                    </Typography>
                </Link>
            </ContainerCardCenter>
        )
    }

}

export default LogOutScreen
