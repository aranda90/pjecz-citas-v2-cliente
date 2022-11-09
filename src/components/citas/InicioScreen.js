import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Button, Card, CardMedia,  Grid, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

export const InicioScreen = () => {
    const { isAuthenticated } = useSelector( state => state.auth )

    const [data, setData] = useState(); 
   
    useEffect(() => {

        fetch(`http://storage.googleapis.com/pjecz-informatica/static/json/datosInicio.json`)
            .then((res) => res.json())
            .then((data) => {
                setData(data);
            })
            .catch((err) => {
                console.log(err.message);
            });

    },[])

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
                <Typography variant='body1' sx={{ color:'#002540',fontWeight:500, mb:3, textAlign:'center' }}>
                    Tienes tu sesión iniciada, ve a <Link to='/citas' style={{ textDecoration:'none', color:'#002540', fontWeight:700}} >MIS CITAS</Link>
                </Typography>
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
                { 
                    data && data.map((item) => (
                       <>
                        <Typography variant='h5' align='center' style={{ color:'#002540', fontWeight:700, marginBottom:22}} gutterBottom>
                            {item.titulo}
                        </Typography>
                        <Typography variant='body1' align='justify' paragraph style={{ color:'#012037'}}>
                            {item.subtitulo} 
                        </Typography>  
                        <Typography variant='body1' paragraph align='justify' style={{ color:'#012037'}}>
                            {item.descripcion1}
                        </Typography> 
                        <Typography variant='subtitle1' align='justify' paragraph style={{ color:'#012037', fontWeight:700}}>
                            {item.descripcion2}
                        </Typography> 
                        <Typography variant='body1' align='justify' paragraph style={{ color:'#012037'}}>
                            {item.descripcion3}
                        </Typography>
                        <Typography variant='body1' align='justify' paragraph style={{ color:'#012037'}}>
                            {item.descripcion4}
                        </Typography>
                        <Typography variant='body1' align='justify' style={{ color:'#012037', fontWeight:700, marginTop:15}}>
                            {item.descripcion5}
                        </Typography>
                        </>
                    ))
                }
            </Grid>
            <Grid item sm={2} xs={12}></Grid>
        </Grid>
    </>
  )
}

