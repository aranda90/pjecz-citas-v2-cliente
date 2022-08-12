import React from 'react'

import { Container } from '@mui/material'

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
        <Container sx={{ mt: 15, mb:20 }}>

            <Navigation />
   
            <Outlet />

            <Footer />

        </Container>
    )

}
