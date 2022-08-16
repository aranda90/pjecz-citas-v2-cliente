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



export const EncuestaSatisfaccion = () => {
    
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
            icon: <SentimentDissatisfiedIcon color="secondary" />,
            label: 'Dissatisfied',
        },
        3: {
            icon: <SentimentSatisfiedIcon color="warning" />,
            label: 'Neutral',
        },
        4: {
            icon: <SentimentSatisfiedAltIcon color="success" />,
            label: 'Satisfied',
        },
        5: {
            icon: <SentimentVerySatisfiedIcon color="success" />,
            label: 'Very Satisfied',
        },
    }
    
    console.log(customIcons)
    
    
    function IconContainer(props) {
        const { value, ...other } = props;
        return <span {...other}>{customIcons[value].icon}</span>
    }
    
    IconContainer.propTypes = {
        value: PropTypes.number.isRequired,
    }
 

    // const [] = useState()

  return (
    <>
        <ContainerCardCenter sx={{}}>
            <Typography variant='h4' sx={commonSX.title}>
                Encuesta de satisfacción
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12}>

                    <Typography variant='body1' gutterBottom>
                        ¿Cómo te sientes con el tiempo de atención para realizar tu trámite?
                    </Typography>
                    <StyledRating
                        name="highlight-selected-only"
                        defaultValue={3}
                        IconContainerComponent={IconContainer}
                        getLabelText={(value) => customIcons[value].label}
                        highlightSelectedOnly
                    />
                </Grid>
                <Grid item xs={12} sm={12}>

                    <Typography variant='body1' gutterBottom>
                        ¿Cómo calificarías tu experiencia con el servicio brindado?
                    </Typography>
                    <StyledRating
                        name="highlight-selected-only"
                        defaultValue={3}
                        IconContainerComponent={IconContainer}
                        getLabelText={(value) => customIcons[value].label}
                        highlightSelectedOnly
                    />
                </Grid>
                <Grid item xs={12} sm={12}>

                    <Typography variant='body1' gutterBottom>
                        ¿Cómo podemos mejorar tu experiencia en el PJECZ?
                    </Typography>
                    <TextField
                        id="experiencia"
                        label="Escribe tu opinión"
                        name="experiencia"
                        // value={}
                        // onChange={}
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
                    >
                        Envíar
                    </Button>
                </Grid>
            </Grid>
        </ContainerCardCenter>
    </>
  )
}
