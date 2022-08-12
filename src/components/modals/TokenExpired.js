import React, { useState } from 'react'
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { types } from '../../types/types'
import { LoadingButton } from '@mui/lab'


export const TokenExpired = () => {

    const dispatch = useDispatch()

    const { open } = useSelector(state => state.token);

    const [openLoading, setopenLoading] = useState(false)

    const IniciarSesion = () => {

        setopenLoading(true)
        
        setTimeout(() => {

            window.localStorage.clear();
            dispatch({ type:types.SET_LOG_OUT_CIT_CLIENTE})
            setopenLoading(false)
            dispatch({ type:types.TOKEN_EXPIRED_CLEAN})
            
        }, 1000)
        
    }  
    
  return (
    <>
            <Dialog open={ open } onClose={ () => {} } >
                <DialogTitle>
                    El tiempo de sesión ha expirado
                </DialogTitle>

                <DialogContent>
                    <DialogContentText>
                        Por seguridad es necesario volver a iniciar sesión
                    </DialogContentText>
                </DialogContent>

                <DialogActions>
                    <LoadingButton 
                        variant='contained' 
                        color='primary' 
                        onClick={ IniciarSesion }
                        loading={ openLoading }
                    >
                        Aceptar
                    </LoadingButton>
                </DialogActions>
            </Dialog>  
        </>
  )
}
