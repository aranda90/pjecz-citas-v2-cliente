import React from 'react'
import { Link } from 'react-router-dom'
import { AppBar, Button, IconButton, Toolbar, Typography } from '@mui/material'
import { Box } from '@mui/system'
import MenuIcon from '@mui/icons-material/Menu'

import '../../css/global.css'


const Navigation = () => {

    const styles = {
        appBarBox: { flexGrow: 1, mt: 15 },
        systemName: { mr: 2 },
        optionBox: { flexGrow: 1, display: { xs: 'none', md: 'flex' } },
        optionButton: { my: 2, color: 'white', display: 'block', mr: 1 },
    }

    return (
        <Box sx={styles.appBarBox}>
            <AppBar position='absolute'>
                <Toolbar>

                    <IconButton color='inherit'>
                        <MenuIcon fontSize='large' />
                    </IconButton>

                    <Typography variant='h5' sx={styles.systemName}>
                        <Link to='/' className='app-bar-desktop-link'>
                            Sistema de Citas
                        </Link>
                    </Typography>

                    <Box sx={styles.optionBox}>
                        <Button key='aviso_privacidad' sx={styles.optionButton} >
                            <Link to='/privacy_terms' className='app-bar-desktop-link'>
                                Aviso de Privacidad
                            </Link>
                        </Button>
                        <Button key='terminos_condiciones_uso' sx={styles.optionButton} >
                            <Link to='/use_terms' className='app-bar-desktop-link'>
                                Términos y Condiciones de Uso
                            </Link>
                        </Button>
                    </Box>

                </Toolbar>
            </AppBar>
        </Box>
    )

}

export default Navigation
