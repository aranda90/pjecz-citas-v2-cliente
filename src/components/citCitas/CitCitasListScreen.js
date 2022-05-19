import React from 'react';
import { Card, Container, Typography } from '@mui/material';
import '../../css/global.css';


export const CitCitasListScreen = () => {

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
