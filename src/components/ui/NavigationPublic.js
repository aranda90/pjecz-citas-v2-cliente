import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Box, Button } from '@mui/material'

import navigationSX from '../../theme/NavigationSX'
import '../../css/global.css'


const NavigationPublic = () => {

    const navigate = useNavigate()
    const goToPrivacyTerms = () => {
        navigate('/privacy_terms')
    }
    const goToUseTerms = () => {
        navigate('/use_terms')
    }

    return (
        <Box sx={navigationSX.pagesBoxDesktop}>
            <Button key='aviso_privacidad' onClick={goToPrivacyTerms} sx={navigationSX.pagesButtonDesktop}>
                Aviso de Privacidad
            </Button>
            <Button key='terminos_condiciones_uso' onClick={goToUseTerms} sx={navigationSX.pagesButtonDesktop}>
                Términos y Condiciones de Uso
            </Button>
        </Box>
    )

}

export default NavigationPublic
