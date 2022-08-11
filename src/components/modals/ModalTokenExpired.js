import React, { useState } from 'react'
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material'
import { useDispatch } from 'react-redux'
import { types } from '../../types/types'


export const ModalTokenExpired = () => {

    const dispatch = useDispatch()

    const [open, setOpen] = useState(false)

    const [loading, setLoading] = useState(false)

    const IniciarSesion = () => {
        setLoading(true)
        
        setTimeout(() => {
            dispatch({ type:types.SET_LOG_OUT_CIT_CLIENTE})
            
        }, 1000)
        setOpen(false)
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
                    <Button 
                        variant='contained' 
                        color='primary' 
                        onClick={ IniciarSesion } 
                        loading={ loading }
                    >
                        Aceptar
                    </Button>
                </DialogActions>
            </Dialog>  
        </>
  )
}
