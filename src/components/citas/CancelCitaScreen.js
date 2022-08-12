import React, { useState } from 'react'

import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material'

import { DeleteCitas } from '../../actions/CitCitasActions'
import { types } from '../../types/types'
import { useDispatch } from 'react-redux'

const CancelCitaScreen = ({ Id, cancelCard  }) => {

    const dispatch = useDispatch()

    const [open, setOpen] = useState(false)
  
    const handleClickDelete = async (e) => {
        
        await DeleteCitas( Id ).then( response => {

            if(response){

                if(response.status === 200){
                    cancelCard(Id)
                }else if(response.status === 401){               
                    dispatch({ type: types.TOKEN_EXPIRED });
                }
                
                setOpen( false )
                
                // console.log(response)
            }
           
        })       

    }


    return (  
        <>
            <Button onClick={ () => { setOpen( true ) } } color="error" size="small" variant="contained">
                Cancelar 
            </Button>
           
            <Dialog
                open={open}
                onClose={ () => { } }
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    Confirmación
                </DialogTitle>
               
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        ¿Desea cancelar la cita seleccionada?
                    </DialogContentText>
                </DialogContent>

                <DialogActions>
                    <Button onClick={() => { setOpen( false ) }}>Cancelar</Button>
                    <Button variant='contained' color='primary' onClick={ handleClickDelete } autoFocus>
                        Aceptar
                    </Button>
                </DialogActions>

            </Dialog>
        </>

    )

}

export default CancelCitaScreen
