import React from 'react'
import { AppBar, Container, Grid, Toolbar, Typography } from '@mui/material'
import { Link } from 'react-router-dom'


const Footer = () => {

    return (
        <AppBar position='fixed' color='primary' sx={{ top: 'auto', bottom: 0 }}>
            <Container maxWidth='md'>
                <Toolbar>
                    <Grid container alignItems='center' justify='center' spacing={2}>
                        <Grid item xs={12} md={2}></Grid>
                        <Grid item xs={12} md={4}>
                            <Link to='/privacy_terms' className='app-bar-desktop-link'>
                                <Typography variant='body2' color='inherit' sx={{textAlign: 'center'}}>
                                    Aviso de Privacidad
                                </Typography>
                            </Link>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Link to='/use_terms' className='app-bar-desktop-link'>
                                <Typography variant='body2' color='inherit' sx={{textAlign: 'center'}}>
                                    Términos y Condiciones de Uso
                                </Typography>
                            </Link>
                        </Grid>
                        <Grid item xs={12} md={2}></Grid>
                    </Grid>
                </Toolbar>
            </Container>
        </AppBar>
    )

}

export default Footer
