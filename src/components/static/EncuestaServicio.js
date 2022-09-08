import React, { useState } from 'react'
import PropTypes from 'prop-types'
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied'
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied'
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied'
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined'
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied'
import { Box, Button, Grid, Rating, styled, TextField, Typography } from '@mui/material'
import ContainerCardCenter from '../ui/ContainerCardCenter'
import commonSX from '../../theme/CommonSX'
import { useLocation, useNavigate } from 'react-router-dom'
import { GetPollService } from '../../actions/EncuestaActions'


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

const labels = {
  
    1: "Muy Difícil",
  
    2: "Difícil",
  
    3: "Neutral",
  
    4: "Fácil",
  
    5: "Muy Fácil",
  
  }

  function getLabelText(value) {
    return `${value} ${value !== 1 ? '' : ''}, ${labels[value]}`
  }

function IconContainer(props) {
    const { value, ...other } = props;
    return <span {...other}>{customIcons[value].icon}</span>
}

export const EncuestaServicio = () => {
    
    // const navigate = useNavigate()

    // let {search} = useLocation()
    // let parametros = new URLSearchParams(search)
    // let hashid = parametros.get('hashid')

    // const [hashOK, setHashOK] = useState(false)

    const [error, setError ] = useState('')

    // const checkHash = () => {

    //     if(hashOK){
    //         return true
    //     }else{
    //         return false
    //     }
    //     console.log(hashOK)

        // await GetPollService(hashid).then( response => {
        //     if(response){
                
        //         if(response.status === 200){
                    
        //             setHashOK(true);

        //         }else{
        //             setError(response.data.detail)
        //             setHashOK(false);
        //         }

        //     }
        // })
    // }

    // if(hashid === null){
    //     setHashOK(false)
    // }else{
        
    //     checkHash();

    // }

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
        // hashid:hashid,
    })

    const { respuesta_01, respuesta_02, respuesta_03} = formData

    const handleChangeInputs = (e) => {
        
        setFormData({
            ...formData,
            [e.target.name] : e.target.value
        })
    }

    const enviarInformacion = async(e) => {
        e.preventDefault()

        // formData.respuesta_01 = ratingValue
        // formData.respuesta_02 = ratingValue
        // formData.respuesta_03 = ratingValue

        console.log(respuesta_01, respuesta_02, respuesta_03)
    }

    //if(hashOK){
    return (
        <>
            <ContainerCardCenter sx={{}}>
                <Typography variant='h4' sx={commonSX.title} style={{color:'#022E66'}}>
                    Encuesta de servicio
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
                            ratingValue01 <= respuesta_01 ?
                            
                            <span></span> 
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
                            ratingValue02 <= respuesta_02 ?
                            
                            <span></span> 
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
                            ratingValue03 <= respuesta_03 ?
                            
                            <span></span> 
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
    // }else{
    //     return(
    //         <>
    //             <ContainerCardCenter>
    //                 <Typography variant='h5' gutterBottom style={{ textTransform:'uppercase', color:'#022E66'}}>
    //                     Revisa tu información
    //                 </Typography>
    //                 <Typography variant='body1'>
    //                     {error}
    //                 </Typography>
    //             </ContainerCardCenter>
    //         </>
    //     ) 
    // }
}


IconContainer.propTypes = {
    value: PropTypes.number.isRequired,
}