import React from 'react'

import { useNavigate } from 'react-router-dom'

import { Box, Button } from '@mui/material'

import navigationSX from '../../theme/NavigationSX'

import '../../css/global.css'

const NavigationMain = () => {

    const navigate = useNavigate()

    const goToListCitas = () => {
        navigate('/citas')
    }

    return (
        <>
        <Box sx={navigationSX.pagesBoxDesktop}>
            <Button key='Opcion' onClick={ goToListCitas } sx={navigationSX.pagesButtonDesktop}>
                Mis Citas
            </Button>
        </Box>
        </>
    )

}

export default NavigationMain

