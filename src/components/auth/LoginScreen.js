import React from 'react';
import { Button, Card, Container, Grid, TextField, Typography } from '@mui/material';
import { Link } from 'react-router-dom';


export const LoginScreen = () => {

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
                            Ingrese su usuario y contrasena
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
                                        label="Contrasena"
                                        name="username"
                                        type="password"
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Button
                                        variant='contained'
                                        fullWidth>
                                        Ingresar
                                    </Button>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography variant='body1'>
                                        <Link to='/recover_account' style={styles.link}>
                                            Olvide mi contrasena
                                        </Link>
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography variant='body1'>
                                        <Link to='/new_account' style={styles.link}>
                                            Quiero crear una nueva cuenta
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
