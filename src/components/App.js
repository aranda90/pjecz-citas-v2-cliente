import React from 'react'

import { Provider } from 'react-redux'

import { ThemeProvider } from '@mui/material'

import InstitutionalTheme from '../theme/InstitutionalTheme'

import { store } from '../store/store'

import AppRouter from './AppRouter'

const App = () => {
      
    return(
        <Provider store = { store }>

            <ThemeProvider theme={InstitutionalTheme}>

                <AppRouter />

            </ThemeProvider>

        </Provider>
    )
}

export default App
