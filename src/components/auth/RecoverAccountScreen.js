import React from 'react';
import { Button, Card, Container, Grid, TextField, Typography } from '@mui/material';
import { Link } from 'react-router-dom';


export const RecoverAccountScreen = () => {

    const styles = {
        link: { textDecoration: 'none', color: 'inherit' }
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
                        <form>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <TextField
                                        label="Correo electronico"
                                        name="username"
                                        type="email"
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        label="Correo electronico"
                                        name="username"
                                        type="email"
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Button
                                        variant='contained'
                                        fullWidth>
                                        Recuperar
                                    </Button>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography variant='body1'>
                                        <Link to='/' style={styles.link}>
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
