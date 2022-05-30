import React, { useEffect, useState } from 'react'
import { AppBar, Toolbar, Typography, Container, Button } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'

import navigationSX from '../../theme/NavigationSX'
import '../../css/global.css'

import { Profile } from '../../actions/AuthActions'

import NavigationAccess from './NavigationAccess'
import NavigationMain from './NavigationMain'
import NavigationLogged from './NavigationLogged'
import NavigationPublic from './NavigationPublic'

const Navigation = () => {

    // Determinar si el usuario esta logueado
    const [isLogged, setIsLogged] = useState(false)
    const [username, setUsername] = useState('')
    useEffect(() => {
        async function fetchData() {
            if (window.localStorage.getItem('token')) {
                const response = await Profile()
                if (response.status === 200) {
                    setIsLogged(true)
                    setUsername(response.data.email)
                } else if (response.status === 401) {
                    setIsLogged(false)
                    window.localStorage.removeItem('data')
                }
                setIsLogged(true)
                setUsername(response.data.username)
            }
        }
        fetchData()
    }, [isLogged])

    return(
        <AppBar position='absolute'>
            <Container maxWidth='xl'>
                <Toolbar disableGutters>
                    <MenuIcon sx={navigationSX.menuIconMobile} />
                    <Typography variant='h6' noWrap component='a' href='/' sx={navigationSX.systemNameMobile}>
                        Citas
                    </Typography>
                    <MenuIcon sx={navigationSX.menuIconDesktop} />
                    <Typography variant='h5' noWrap component='a' href='/' sx={navigationSX.systemNameDesktop}>
                        Sistema de Citas
                    </Typography>
                    {isLogged ? <NavigationMain /> : <NavigationPublic />}
                    {isLogged ? <NavigationLogged username={username} /> : <NavigationAccess />}
                </Toolbar>
            </Container>
        </AppBar>
    )

}

export default Navigation
