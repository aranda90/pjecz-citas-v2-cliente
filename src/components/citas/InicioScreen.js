import React from 'react'
import { useSelector } from 'react-redux'
import { Button, Card, CardMedia,  Grid, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

export const InicioScreen = () => {
    const { isAuthenticated } = useSelector( state => state.auth )

  return (
    <>
        <Grid container sx={{mt:15, display:'flex', flexDirection:'row', p:4}}>
            <Grid item sm={1} xs={12}></Grid>
            <Grid item sm={5} xs={12} sx={{display:'flex', flexDirection:'column', m:2}}>

                <Typography variant='h4' gutterBottom>
                    Bienvenido(a) al nuevo sistema de citas
                </Typography>
                
                <Typography variant='body1' sx={{mb:3}}>
                    El <b>Poder Judicial del Estado de Coahuila de Zaragoza </b> pone al servicio de la ciudadanía la versión 2 del Sistema de citas que te permitirá agendar tu visita a nuestros órganos jurisdiccionales mediante una moderna herramienta en línea.
                </Typography>
                {
                    isAuthenticated 
                ? 
                    null
                :
                <Button color='success' variant='contained' component={Link} to='/login' sx={{mr:2}}>
                    Ingresar
                </Button>
                }
                <Typography variant='body2' color='inherit' sx={{textAlign: 'center', mb:1, mt:1, mr:7}}>
                    Aclaraciónes, dudas y comentarios, contáctenos al correo: <b>citas@pjecz.gob.mx</b>
                </Typography>
                <Typography variant='body2' color='inherit' sx={{textAlign: 'center', mb:1, mt:1, mr:7}}>
                   <Link to='/preguntas_frecuentes' style={{ textDecoration:'none', color:'#032590'}}> 
                    ¿Tienes dudas? Lee las Preguntas Frecuentes 
                   </Link>
                </Typography>
            </Grid>
            <Grid item sm={5} xs={12} sx={{ mb:30}} >
                <div style={{ padding:"10%", position:'relative'}}>
                    <Card sx={{ maxWidth: 'lg' }}>

                        <CardMedia
                            component="iframe"
                            controls
                            src="https://player.vimeo.com/video/738800419?h=17cda266e5&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                            allow='autoplay'
                            allowFullScreen
                            sx={{ position:'absolute', top:60, left:0 }}
                            height="260"
                        />

                    </Card>
                </div>
            </Grid>
            <Grid item sm={1} xs={12}></Grid>
        </Grid>
            <CardMedia
                component="img"
                src="https://storage.googleapis.com/pjecz-informatica/static/images/carrusel-nuevas-medidas-administrativas.jpg"
                sx={{
                    display: 'flex',
                    '& > :not(style)': {
                        
                        width: 950,
                        height: 220,
                    },
                    objectFit:'contain',
                    position:'relative',
                    right:0,
                    left:0,
                    bottom:30
                }}
            />          
        <Grid container sx={{ mb:2, display:'flex', flexDirection:'row', fontFamily:'Roboto'}}>
            <Grid item sm={2} xs={12}></Grid>
            <Grid item sm={8} xs={12}>
                
                <Typography variant='h5' align='center' style={{ color:'#002540', fontWeight:700, marginBottom:22}} gutterBottom>
                    Estas son las NUEVAS Medidas Administrativas
                </Typography>
                <Typography variant='body1' align='justify' paragraph='true' style={{ color:'#012037'}}>
                    A partir del 12 de Septiembre del 2022
                </Typography>  
                <Typography variant='body1' paragraph={true} align='justify' style={{ color:'#012037'}}>
                    Tendrás un CÓDIGO DE ASISTENCIA en cada cita, proporciónalo al llegar a tu cita
                    para marcar asistencia 
                </Typography> 
                <Typography variant='subtitle1' align='justify' paragraph={true}  style={{ color:'#012037', fontWeight:700}}>
                    * COMIENZA en el Centro de Justicia de Saltillo *
                </Typography> 
                <Typography variant='body1' align='justify' paragraph={true}  style={{ color:'#012037'}}>
                    Se han ampliado la cantidad de citas por segmento de tiempo de 3 a 5
                </Typography>
                <Typography variant='body1' align='justify' paragraph={true} style={{ color:'#012037'}}>
                    Donde los Adultos Mayores pueden mostrar una identificación oficial y solicitar en recepción una CITA INMEDIATA 
                </Typography>
                <Typography variant='body1' align='justify' style={{ color:'#012037', fontWeight:700, marginTop:15}}>
                    Esto es resultado del diálogo permanente con foros, barras y colegios de abogados para brindar un servicio acorde al dinamismo que exige la justicia.
                </Typography>
            </Grid>
            <Grid item sm={2} xs={12}></Grid>
        </Grid>
    </>
  )
}
