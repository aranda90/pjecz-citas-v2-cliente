import React from 'react'
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import { ThemeProvider } from '@mui/material'

import InstitutionalTheme from '../theme/InstitutionalTheme'

import Navigation from './ui/Navigation'

import LoginScreen from './auth/LoginScreen'
import NewAccountScreen from './auth/NewAccountScreen'
import NewAccountConfirmScreen from './auth/NewAccountConfirmScreen'
import ProfileScreen from './auth/ProfileScreen'
import RecoverAccountScreen from './auth/RecoverAccountScreen'
import RecoverAccountConfirmScreen from './auth/RecoverAccountConfirmScreen'
import PrivacyTermsScreen from './static/PrivacyTermsScreen'
import UseTermsScreen from './static/UseTermsScreen'
import ListCitasScreen from './citas/ListCitasScreen'


const Layout = () => {
    return(
        <ThemeProvider theme={InstitutionalTheme}>
            <Navigation />
            <Outlet />
        </ThemeProvider>
    )
}

const App = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<LoginScreen />} />
                    <Route path='/new_account' element={<NewAccountScreen />} />
                    <Route path='/new_account_confirm' element={<NewAccountConfirmScreen />} />
                    <Route path='/profile' element={<ProfileScreen />} />
                    <Route path='/recover_account' element={<RecoverAccountScreen />} />
                    <Route path='/recover_account_confirm' element={<RecoverAccountConfirmScreen />} />
                    <Route path='/privacy_terms' element={<PrivacyTermsScreen />} />
                    <Route path='/use_terms' element={<UseTermsScreen />} />
                    <Route path='/list' element={<ListCitasScreen />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
