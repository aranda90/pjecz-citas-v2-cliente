import React from 'react'

import { useNavigate } from 'react-router-dom'

import { Box, Button } from '@mui/material'

import navigationSX from '../../theme/NavigationSX'

import '../../css/global.css'
import { useDispatch } from 'react-redux'
import { types } from '../../types/types'

const NavigationMain = () => {

    const navigate = useNavigate()

    const dispatch = useDispatch()

    const goToListCitas = () => {
        navigate('/citas')
        dispatch({ type:types.CLEAN_INPUTS })
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

