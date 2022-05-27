import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Box, Button } from '@mui/material'
import LoginIcon from '@mui/icons-material/Login'

import navigationSX from '../../theme/NavigationSX'


const NavigationAccess = () => {

    const navigate = useNavigate()
    const goToLogin = () => {
        navigate('/login')
    }

    return (
        <Box sx={navigationSX.accountBoxDesktop}>
            <Button key='login' onClick={goToLogin} sx={navigationSX.pagesButtonDesktop}>
                <LoginIcon fontSize="medium" sx={navigationSX.pagesIconDesktop} />
                Ingresar
            </Button>
        </Box>
    )

}

export default NavigationAccess
