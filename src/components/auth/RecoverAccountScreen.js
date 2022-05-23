import React, { useState } from 'react'
import { Button, Card, Container, Grid, TextField, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { RecoverAccount } from '../actions/AuthActions'
import { commonSX } from '../ui/commonSX'
import '../../css/global.css'


const cleanFormData = {
    email: '',
    email2: '',
}

export const RecoverAccountScreen = () => {

    const [formData, setFormValues] = useState({
        email: '',
        email2: '',
    })
    const [formSent, setFormSent] = useState(false)

    const handleChange = (evento) => {
        const { name, value } = evento.target
        setFormValues((prevState) => {
            return {
                ...prevState,
                [name]: value,
            }
        })
    }

    const submitForm = () => {
        RecoverAccount(formData).then( response => {
            console.log(response)
        })
        setFormValues(cleanFormData)
        setFormSent(true)
    }

    if (formSent) {
        return (
            <Container sx={commonSX.container}>
                <Grid container spacing={2}>
                    <Grid item md={3} xs={12}></Grid>
                    <Grid item md={6} xs={12}>
                        <Card align='center' sx={commonSX.card}>
                            <Typography variant='h5' sx={commonSX.title}>
                                Se ha enviado su solicitud de recuperacion
                            </Typography>
                            <Typography variant='body1'>
                                Dentro de poco recibira un mensaje en su correo electronico.
                            </Typography>
                            <Typography variant='body1'>
                                <Link to='/' className='link'>
                                    Regresar al inicio
                                </Link>
                            </Typography>
                        </Card>
                    </Grid>
                    <Grid item md={3} xs={12}></Grid>
                </Grid>
            </Container>
        )
    } else {
        return (
            <Container sx={commonSX.container}>
                <Grid container spacing={2}>
                    <Grid item md={3} xs={12}></Grid>
                    <Grid item md={6} xs={12}>
                        <Card align='center' sx={commonSX.card}>
                            <Typography variant='h5' sx={commonSX.title}>
                                Recuperar mi contrasena
                            </Typography>
                            <form onSubmit={(e) => e.preventDefault()}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12}>
                                        <TextField
                                            label="Correo electronico"
                                            type="email"
                                            fullWidth
                                            name='email'
                                            onChange={handleChange}
                                            value={formData.email}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            label="Correo electronico"
                                            type="email"
                                            fullWidth
                                            name='email2'
                                            onChange={handleChange}
                                            value={formData.email2}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Button
                                            variant='contained'
                                            fullWidth
                                            type='submit'
                                            onClick={submitForm}
                                        >
                                            Recuperar
                                        </Button>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Typography variant='body1'>
                                            <Link to='/' className='link'>
                                                Si ya tienes tu cuenta, regresa al inicio
                                            </Link>
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </form>
                        </Card>
                    </Grid>
                    <Grid item md={3} xs={12}></Grid>
                </Grid>
            </Container>
        )
    }

}
