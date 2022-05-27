import React, { useEffect, useState } from 'react'
import { Button, Typography } from '@mui/material'

import ContainerCardCenter from '../ui/ContainerCardCenter'
import commonSX from '../../theme/CommonSX'
import '../../css/global.css'
import { Link } from 'react-router-dom'


const LogOutScreen = () => {

    // Revisar si ya esta logueado
    const [isLogged, setIsLogged] = useState(false)
    function checkStorage() {
        if (window.localStorage.getItem('token')) {
            setIsLogged(true)
        } else {
            setIsLogged(false)
        }
    }
    useEffect(() => {
        checkStorage()
        return () => {}
    }, [isLogged])

    // Salir de la sesion
    const logOut = () => {
        window.localStorage.removeItem('token')
        setIsLogged(false)
    }

    if (isLogged) {
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
                <Link to='/login' className='link'>
                    <Typography variant='body1'>
                        Volver a ingresar
                    </Typography>
                </Link>
            </ContainerCardCenter>
        )
    }

}

export default LogOutScreen
