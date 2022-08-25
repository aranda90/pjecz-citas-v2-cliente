import React, { useState } from 'react'

import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid } from '@mui/material'

import { DeleteCitas } from '../../actions/CitCitasActions'
import { types } from '../../types/types'
import { useDispatch } from 'react-redux'

const CancelCitaScreen = ({ Id, cancelCard  }) => {

    const dispatch = useDispatch()

    const [open, setOpen] = useState(false)

    const [error, setError] = useState('')

  
    const handleClickDelete = async (e) => {
        
        await DeleteCitas( Id ).then( response => {

            if(response){

                if(response.status === 200){
                    cancelCard(Id)
                }else if(response.status === 401){               
                    dispatch({ type: types.TOKEN_EXPIRED });
                }
                if(response.status === 406 || 404){
                    setError(response.data.detail)
                }
                
                setOpen( false )
                
            }
           
        })       

    }


    return (  
        <>
            <Grid container>
                <Grid item xs={12}>
                    <Button onClick={ () => { setOpen( true ) } } color="error" size="small" variant="contained"  style={{ float:'right'}}>
                        Cancelar 
                    </Button>
                </Grid>
                <Grid item xs={12} sx={{ mt:2}}>
                    {
                        error ? <span style={{color: '#BC0B0B', marginTop:4, inlineSize:'120px', fontSize:18 }}>{error}</span> : null
                    }
                </Grid>
            </Grid>
           
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
