import React, { useState } from 'react'
import PropTypes from 'prop-types'
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied'
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied'
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied'
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined'
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied'
import { Box, Button, Card, CardHeader, CardMedia, Container, Grid, Rating, styled, TextField, Typography } from '@mui/material'
import ContainerCardCenter from '../ui/ContainerCardCenter'
import commonSX from '../../theme/CommonSX'
import { useLocation, useNavigate } from 'react-router-dom'
import { GetPollService, UpdatePollService } from '../../actions/EncuestaActions'


const StyledRating = styled(Rating)(({ theme }) => ({
    '& .MuiRating-iconEmpty .MuiSvgIcon-root': {
      color: theme.palette.action.disabled,
    },
}))

const customIcons = {
    1: {
        icon: <SentimentVeryDissatisfiedIcon color="error" />,
        label: 'Muy Insatisfecho',
        
    },
    2: {
        icon: <SentimentDissatisfiedIcon color="dissatisfied" />,
        label: 'Insatisfecho',
    },
    3: {
        icon: <SentimentSatisfiedIcon color="warning" />,
        label: 'Neutral',
    },
    4: {
        icon: <SentimentSatisfiedAltIcon color="satisfied" />,
        label: 'Satisfecho',
    },
    5: {
        icon: <SentimentVerySatisfiedIcon color="success" />,
        label: 'Muy Satisfecho',
    },
}

const labels = {
  
    1: "Muy Insatisfecho",
  
    2: "Insatisfecho",
  
    3: "Neutral",
  
    4: "Satisfecho",
  
    5: "Muy Satisfecho",
  
  }

  function getLabelText(value) {
    return `${value !== 1 ? '' : ''} ${labels[value]}`
  }

function IconContainer(props) {
    const { value, ...other } = props;
    return <span {...other}>{customIcons[value].icon}</span>
}

export const EncuestaServicio = () => {
    
    const navigate = useNavigate()

    let {search} = useLocation()
    let parametros = new URLSearchParams(search)
    let hashid = parametros.get('hashid')

    const [hashOK, setHashOK] = useState(false)

    const [error, setError ] = useState('')

    const checkHash = async() => {

        await GetPollService(hashid).then( response => {
            if(response){
                
                if(response.status === 200){
                    
                    setHashOK(true);

                }else{
                    setError(response.data.detail)
                    setHashOK(false);
                }

            }
        })
    }

    if(hashid === null){
        setHashOK(false)
    }else{
        
        checkHash();

    }

    const [ratingValue01, setReatingValue01] = useState(IconContainer.value)
    const [ratingValue02, setReatingValue02] = useState(IconContainer.value)
    const [ratingValue03, setReatingValue03] = useState(IconContainer.value)


    const handleChangeRating01 = (event, newValue) => {
        setReatingValue01(newValue)
    }

    const handleChangeRating02 = (event, newValue) => {
        setReatingValue02(newValue)
    }

    const handleChangeRating03 = (event, newValue) => {
        setReatingValue03(newValue)
    }

    const [ formData, setFormData ] = useState({
        respuesta_01:0,
        respuesta_02:0,
        respuesta_03:0,
        respuesta_04:'',
        hashid:hashid,
    })

    const handleChangeInputs = (e) => {
        
        setFormData({
            ...formData,
            [e.target.name] : e.target.value
        })
    }

    const enviarInformacion = async(e) => {
        e.preventDefault()

        if(!ratingValue01){
            setError('Selecciona el icono de la pregunta 1')
            return false
        }else if(!ratingValue02){
            setError('Selecciona el icono de la pregunta 2')
            return false
        }else if(!ratingValue03){
            setError('Selecciona el icono de la pregunta 3')
            return false
        }

        formData.respuesta_01 = ratingValue01
        formData.respuesta_02 = ratingValue02
        formData.respuesta_03 = ratingValue03

        await UpdatePollService(formData).then(response => {
            if(response){
                if(response.status === 200){
                    navigate('/poll_response')
                }else{
                    setError(response.data.detail)
                }

                if(response.status === 406 || 404){
                    setError(response.data.detail)
                }
            }
        })
    }

    if(hashOK){
    return (
        <>
            <ContainerCardCenter sx={{}}>
                <Typography variant='h4' sx={commonSX.title} style={{color:'#022E66'}}>
                    Encuesta de servicio
                </Typography>
                <Typography variant='body2' sx={commonSX.title} style={{color:'#022E66'}} gutterBottom>
                    (Selecciona los iconos para calificar la encuesta)
                </Typography>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={12}>

                        <Typography variant='body1' gutterBottom>
                            ¿Cómo te sientes con la atención que recibiste para realizar tu trámite?
                        </Typography>
                        <StyledRating
                            name="respuesta_01"
                            id="respuesta_01"
                            IconContainerComponent={IconContainer}
                            getLabelText={(value) => customIcons[value].label}
                            highlightSelectedOnly
                            onChange={handleChangeRating01}
                        />
                        {
                            !ratingValue01 ?
                            
                            null 
                            :
                            <Box style={{ color:'#014DAE'}}>{getLabelText(ratingValue01)}</Box> 
                                
                        }
                    </Grid>
                    <Grid item xs={12} sm={12}>

                        <Typography variant='body1' gutterBottom>
                            ¿Cómo calificarías el tiempo de atención para realizar tu trámite?
                        </Typography>
                        <StyledRating
                            name="respuesta_02"
                            id="respuesta_02"
                            IconContainerComponent={IconContainer}
                            getLabelText={(value) => customIcons[value].label}
                            highlightSelectedOnly
                            onChange={handleChangeRating02}
                        />
                        {
                            !ratingValue02  ?
                            
                            null 
                            :
                            <Box style={{ color:'#014DAE'}}>{getLabelText(ratingValue02)}</Box> 
                                
                        }
                    </Grid>
                    <Grid item xs={12} sm={12}>

                        <Typography variant='body1' gutterBottom>
                            ¿Cómo calificarías tu experiencia con el servicio brindado?
                        </Typography>
                        <StyledRating
                            name="respuesta_03"
                            id="respuesta_03"
                            IconContainerComponent={IconContainer}
                            getLabelText={(value) => customIcons[value].label}
                            highlightSelectedOnly
                            onChange={handleChangeRating03}
                        />
                        {
                            !ratingValue03 ?
                            
                            null
                            :
                            <Box style={{ color:'#014DAE'}}>{getLabelText(ratingValue03)}</Box> 
                                
                        }
                    </Grid>
                    <Grid item xs={12} sm={12}>

                        <Typography variant='body1' gutterBottom>
                            ¿Cómo podemos mejorar tu experiencia en el PJECZ?
                        </Typography>
                        <TextField
                            id="respuesta_04"
                            label="Escribe tu opinión"
                            name="respuesta_04"
                            onChange={handleChangeInputs}
                            multiline
                            rows={4}
                            placeholder="Escribe tu opinión"
                            style={{ width: '100%' }}
                        />
                    </Grid>
                    {
                        error ? <span style={{color: '#BC0B0B', marginTop:4, inlineSize:'1620px', fontSize:18 }}>{error}</span> : null
                    }
                    <Grid item xs={12} sm={12}>
                        <Button 
                            variant='contained'  
                            color='info' 
                            style={{ float:'right'}}
                            type='submit'
                            onClick={enviarInformacion}
                        >
                            Envíar
                        </Button>
                    </Grid>
                </Grid>
            </ContainerCardCenter>
        </>
    )
    }else{
        return(
        <>
            <Container sx={commonSX.container}>
                <Grid container spacing={2}>
                    <Grid item md={3} xs={12}></Grid>
                    <Grid item md={6} xs={12}>   
                        <Card align='center' sx={{ maxWidth: 450 }}>
                            <CardMedia 
                                component="img"
                                src='https://storage.googleapis.com/pjecz-informatica/static/images/warning.png'
                                sx={{  display:'flex', width:300}}
                                alt="warning"
                            />
                            <CardHeader 
                                style={{ 
                                    background:'linear-gradient(180deg, rgba(6,109,166,1) 0%, rgba(1,80,123,1) 35%, rgba(0,67,96,1) 100%)',
                                    boxShadow:'-3px -6px 13px -4px rgba(137,137,137,0.75)', 
                                    color:'#F8F8F8', 
                                    margin:0, 
                                    marginTop:10,
                                    textTransform:'uppercase', 
                                    padding:30, 
                                }}
                                title={error}
                            />                           
                        </Card>
                    </Grid>
                    <Grid item md={3} xs={12}></Grid>
                </Grid>
            </Container>
        </>
        ) 
    }
}


IconContainer.propTypes = {
    value: PropTypes.number.isRequired,
}