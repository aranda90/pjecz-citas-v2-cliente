import React from 'react';
import { AppBar, Button, Container, Icon, IconButton, Menu, MenuItem, Toolbar, Typography } from '@mui/material';
import { Box } from '@mui/system';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useNavigate } from 'react-router-dom';


export const Navigation = () => {

    const history = useNavigate();

    const styles = {
        appBar: {},
        box: { flexGrow:1, mt: 15 },
        systemName: { mr: 2 },
        optionBox: { flexGrow: 1, display: { xs: 'none', md: 'flex' } },
        optionButton: { my: 2, color: 'white', display: 'block', mr: 1 },
        optionLink: { color: 'white', textDecoration: 'none' }
    }

    return (
        <Box sx={styles.box}>
            <AppBar position='absolute' sx={styles.appBar}>
                <Toolbar>

                    <IconButton color='inherit'>
                        <MenuIcon fontSize='large' />
                    </IconButton>

                    <Typography variant='h5' sx={styles.systemName}>
                        <Link to='/' style={styles.optionLink}>
                            Sistema de Citas
                        </Link>
                    </Typography>

                    <Box sx={styles.optionBox}>
                        <Button key='aviso_privacidad' sx={styles.optionButton} >
                            <Link to='/privacy_terms' style={styles.optionLink}>
                                Aviso de Privacidad
                            </Link>
                        </Button>
                        <Button key='terminos_condiciones_uso' sx={styles.optionButton} >
                            <Link to='/use_terms' style={styles.optionLink}>
                                Términos y Condiciones de Uso
                            </Link>
                        </Button>
                    </Box>

                </Toolbar>
            </AppBar>
        </Box>
    );

}
