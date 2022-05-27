import React from 'react'
import { Box, Link, Typography } from '@mui/material'

import navigationSX from '../../theme/NavigationSX'
import '../../css/global.css'


const NavigationPublic = () => {

    return (
        <Box sx={navigationSX.pagesBoxDesktop}>
            <Link target='_blank' href='https://www.pjecz.gob.mx' className='app-bar-desktop-link'>
                <Typography variant='body2'>
                    Poder Judicial del Estado de Coahuila de Zaragoza
                </Typography>
            </Link>
        </Box>
    )

}

export default NavigationPublic
