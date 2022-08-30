import React, { useState } from 'react'
import PropTypes from 'prop-types'
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied'
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied'
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied'
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined'
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied'
import { Button, Grid, Rating, styled, TextField, Typography } from '@mui/material'
import ContainerCardCenter from '../ui/ContainerCardCenter'
import commonSX from '../../theme/CommonSX'



export const EncuestaSistema = () => {
    
    const StyledRating = styled(Rating)(({ theme }) => ({
        '& .MuiRating-iconEmpty .MuiSvgIcon-root': {
          color: theme.palette.action.disabled,
        },
    }))

    const customIcons = {
        1: {
            icon: <SentimentVeryDissatisfiedIcon color="error" />,
            label: 'Very Dissatisfied',
            
        },
        2: {
            icon: <SentimentDissatisfiedIcon color="dissatisfied" />,
            label: 'Dissatisfied',
        },
        3: {
            icon: <SentimentSatisfiedIcon color="warning" />,
            label: 'Neutral',
        },
        4: {
            icon: <SentimentSatisfiedAltIcon color="satisfied" />,
            label: 'Satisfied',
        },
        5: {
            icon: <SentimentVerySatisfiedIcon color="success" />,
            label: 'Very Satisfied',
        },
    }
    
    
    function IconContainer(props) {
        const { value, ...other } = props;
        return <span {...other}>{customIcons[value].icon}</span>
    }
    
    IconContainer.propTypes = {
        value: PropTypes.number.isRequired,
    }
 
    
    const [ formData, setFormData] = useState({
        preguntaInteaccion:'',
        preguntaComentarios:'',
    })

    //const {preguntaInteaccion } = formData

   const [ratingValue, setReatingValue] = useState(IconContainer.value)

    const handleChangeRating = (event, newValue) => {
        setReatingValue(newValue)
        console.log(newValue)
    }

    const handleChangeInputs = (e) => {
        
        setFormData({
            ...formData,
            [e.target.name] : e.target.value
        })
    }

    const enviarInformacion = (e) => {
        e.preventDefault()

        console.log( ratingValue + ' ' + formData.preguntaInteaccion + ' ' + formData.preguntaComentarios)
        
    }

  return (
    <>
        <ContainerCardCenter sx={{}}>
            <Typography variant='h4' sx={commonSX.title}>
                Encuesta de satisfacción
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12}>

                    <Typography variant='body1' gutterBottom>
                        ¿Cómo fue tu interacción con el Sistema de Citas Versión 2?
                    </Typography>
                    <StyledRating
                        name="highlight-selected-only"
                        IconContainerComponent={IconContainer}
                        getLabelText={(value) => customIcons[value].label}
                        highlightSelectedOnly
                        onChange={handleChangeRating}
                    />
                </Grid>
                <Grid item xs={12} sm={12}>

                    <Typography variant='body1' gutterBottom>
                        ¿Por qué?
                    </Typography>
                    <TextField
                        id="preguntaInteaccion"
                        label="Escribe tu opinión"
                        name="preguntaInteaccion"
                        //value={preguntaInteaccion}
                        onChange={handleChangeInputs}
                        multiline
                        rows={4}
                        placeholder="Escribe tu opinión"
                        style={{ width: '100%' }}
                    />
                </Grid>
                <Grid item xs={12} sm={12}>

                    <Typography variant='body1' gutterBottom>
                        ¿Tienes algún comentario para nosotros?
                    </Typography>
                    <TextField
                        id="preguntaComentarios"
                        label="Escribe tu opinión"
                        name="preguntaComentarios"
                        // value={}
                        onChange={handleChangeInputs}
                        multiline
                        rows={4}
                        placeholder="Escribe tu opinión"
                        style={{ width: '100%' }}
                    />
                </Grid>
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
            {/*<h3>{formData.preguntaInteaccion} - {formData.preguntaComentarios}</h3>*/}
        </ContainerCardCenter>
    </>
  )
}
