import React, { useContext } from 'react'
import { AppBar, Toolbar, Typography } from '@mui/material'
import { Container } from '@mui/system'
import MenuIcon from '@mui/icons-material/Menu'

import CitClienteContext from '../../context/citcliente/CitClienteContext'

import navigationSX from '../../theme/NavigationSX'
import '../../css/global.css'

import NavigationAccess from './NavigationAccess'
import NavigationMain from './NavigationMain'
import NavigationLogged from './NavigationLogged'
import NavigationPublic from './NavigationPublic'

const Navigation = () => {

    // Obtener el contexto del cliente
    const { isLogged, username } = useContext(CitClienteContext)

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
