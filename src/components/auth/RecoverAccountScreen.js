import React, { useState } from 'react';
import { Button, Card, Container, Grid, TextField, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { RecoverAccount } from '../actions/AuthActions';
import '../../css/global.css';


const cleanFormData = {
    email: '',
    email2: '',
}


export const RecoverAccountScreen = () => {

    const [formData, setFormValues] = useState({
        email: '',
        email2: '',
    });

    const handleChange = (evento) => {
        const { name, value } = evento.target;
        setFormValues((prevState) => {
            return {
                ...prevState,
                [name]: value,
            };
        });
    }

    const submitForm = () => {
        RecoverAccount(formData).then( response => {
            console.log(response);
        });
        setFormValues(cleanFormData);
    }

    return (
        <Container sx={{ marginTop: '40px' }}>
            <Grid container spacing={2}>
                <Grid item md={3} xs={12}></Grid>
                <Grid item md={6} xs={12}>
                    <Card align='center' sx={{ padding: 4 }}>
                        <Typography variant='h5' sx={{ marginBottom: 2 }}>
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
    );

}
