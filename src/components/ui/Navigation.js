import React from 'react'

import { useSelector } from 'react-redux';

import { Link } from 'react-router-dom'

import { AppBar, Container, Toolbar, Typography } from '@mui/material'

import MenuIcon from '@mui/icons-material/Menu'

import navigationSX from '../../theme/NavigationSX'

import '../../css/global.css'

import NavigationAccess from './NavigationAccess'
import NavigationMain from './NavigationMain'
import NavigationLogged from './NavigationLogged'
import NavigationPublic from './NavigationPublic'

const Navigation = () => {
    
    const { isAuthenticated, username } = useSelector( state => state.auth );

    return(
        <AppBar position='absolute'>
            <Container maxWidth='xl'>
                <Toolbar disableGutters>
                    <MenuIcon sx={navigationSX.menuIconMobile} />
                    <Link to='/' className='app-bar-desktop-link'>
                        <Typography variant='h6' noWrap sx={navigationSX.systemNameMobile}>
                            Citas
                        </Typography>
                    </Link>
                    <MenuIcon sx={navigationSX.menuIconDesktop} />
                    <Link to='/' className='app-bar-desktop-link'>
                        <Typography variant='h5' noWrap sx={navigationSX.systemNameDesktop}>
                            Sistema de Citas
                        </Typography>
                    </Link>
                    { isAuthenticated ? <NavigationMain /> : <NavigationPublic />}
                    { isAuthenticated ? <NavigationLogged username={ username } /> : <NavigationAccess />}
                </Toolbar>
            </Container>
        </AppBar>
    )

}

export default Navigation
