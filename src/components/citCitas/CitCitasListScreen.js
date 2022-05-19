import React, { useEffect } from 'react';
import { Card, Container, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import '../../css/global.css';


export const CitCitasListScreen = () => {

    let navigate = useNavigate();

    const token = window.localStorage.getItem('token');

    console.log(token);

    useEffect(() => {

        if (!token ) {
            navigate('/');
        }

    }, [ token ])

    return (
        <Container sx={{ marginTop: '40px' }}>
            <Card align='center' sx={{ padding: 4 }}>
                <Typography variant='h5' sx={{ marginBottom: 2 }}>
                    Citas programadas
                </Typography>
            </Card>
        </Container>
    );

}
