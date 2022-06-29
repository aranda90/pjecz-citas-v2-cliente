import React from 'react'

import { Box, Container, Grid, Typography } from '@mui/material'

import { useDispatch } from 'react-redux'

import { Outlet } from 'react-router-dom'

import { types } from '../../types/types'

import Footer from '../ui/Footer'

import Navigation from '../ui/Navigation'

import { Profile } from '../../actions/AuthActions'


export const CitasScreen = () => {

    const dispatch = useDispatch()

    const token = window.localStorage.getItem('token')  

    async function Obtenerusuario(){

        const responseProfile = await Profile()
        
        dispatch({
            type: types.SET_LOG_IN_CIT_CLIENTE,
            payload: {
                token,
                isAuthenticated: true,
                username: responseProfile.status === 200 ? responseProfile.data.username : ''
            }
        });    

    }
    
    if( token ){

        Obtenerusuario();
    }       
   
    return (
        <Container sx={{ mt: 12 }}>

            <Navigation />

            <Outlet />
            
            <Grid sx={{mt:20, display:'flex', flexDirection:'row'}}>
                <Grid item md='1' xs='12'></Grid>
                <Grid item md='5' xs='12'>
                    <Box sx={{mt:20, mb: 10, display:'flex', flexDirection:'column', pl:5}}>

                        <Typography variant='h3' component='h2' gutterBottom>
                            Bienvenido al  sistema de citas
                        </Typography>
                        
                        <Typography variant='body1' >
                            Esta es una nueva versión de nuestro sistema de citas. <br/>
                            para poder acceder o crear una cuenta nueva da clic en el botón ingresar
                        </Typography>
                    </Box>
                </Grid>
                <Grid item md='4' xs='12'>
                    <img src='../assets/imges/inicioCitas.png' alt=''  />
                </Grid>
                <Grid item md='2' xs='12'></Grid>

            </Grid>
            

            <Footer />

        </Container>
    )

}
