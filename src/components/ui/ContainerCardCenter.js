import React from 'react'
import { Card, Container, Grid } from '@mui/material'

import commonSX from '../../theme/CommonSX'


const ContainerCardCenter = (props) => {

    return (
        <Container sx={commonSX.container}>
            <Grid container spacing={2}>
                <Grid item md={3} xs={12}></Grid>
                <Grid item md={6} xs={12}>
                    <Card align='center' sx={commonSX.card}>
                        {props.children}
                    </Card>
                </Grid>
                <Grid item md={3} xs={12}></Grid>
            </Grid>
        </Container>
    )

}

export default ContainerCardCenter
