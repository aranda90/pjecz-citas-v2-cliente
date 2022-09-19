import { createTheme } from '@mui/material'


const InstitutionalTheme = createTheme({
    palette: {
        type: 'light',
        primary: {
            main: '#004360',
        },
        secondary: {
            main: '#d0a473',
        },
        dissatisfied:{
            main:'#E13400',
        },
        satisfied: {
            main: '#00B32F',
        },
    },
})

export default InstitutionalTheme
