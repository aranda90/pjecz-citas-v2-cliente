import * as React from 'react'
import { Link } from 'react-router-dom'
import { Box, IconButton, Menu, MenuItem, Typography } from '@mui/material'
import PersonIcon from '@mui/icons-material/Person'

import navigationSX from '../../theme/NavigationSX'
import '../../css/global.css'


const NavigationLogged = (props) => {

    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };
    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <Box sx={navigationSX.accountBoxDesktop}>
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <PersonIcon fontSize="medium" sx={navigationSX.accountIconDesktop} />
                <Typography variant="caption" className='app-bar-desktop-link'>
                    {props.username}
                </Typography>
            </IconButton>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
                <MenuItem key='profile' onClick={handleCloseUserMenu}>
                    <Link to='/profile' className='link'>
                        <Typography textAlign="center">
                            Perfil
                        </Typography>
                    </Link>
                </MenuItem>
                <MenuItem key='logout' onClick={handleCloseUserMenu}>
                    <Link to='/logout' className='link'>
                        <Typography textAlign="center">
                            Salir
                        </Typography>
                    </Link>
                </MenuItem>
            </Menu>
        </Box>
    )

}

export default NavigationLogged
