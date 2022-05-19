import React from 'react';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';

import { ThemeProvider } from '@mui/material';
import { InstitutionalTheme } from './theme/InstitutionalTheme';

import { LoginScreen } from './auth/LoginScreen';
import { NewAccountScreen } from './auth/NewAccountScreen';
import { NewAccountConfirmScreen } from './auth/NewAccountConfirmScreen';
import { Navigation } from './ui/Navigation';
import { RecoverAccountScreen } from './auth/RecoverAccountScreen';
import { RecoverAccountConfirmScreen } from './auth/RecoverAccountConfirmScreen';
import { PrivacyTerms } from './static/PrivacyTerms';
import { UseTerms } from './static/UseTerms';
import { CitCitasListScreen } from './citCitas/CitCitasListScreen';


const Layout = () => {

    return(
        <ThemeProvider theme={InstitutionalTheme}>
            <Navigation />
            <Outlet />
        </ThemeProvider>
    );

}


const App = () => {

    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<LoginScreen />} />
                    <Route path='/new_account' element={<NewAccountScreen />} />
                    <Route path='/new_account_confirm' element={<NewAccountConfirmScreen />} />
                    <Route path='/recover_account' element={<RecoverAccountScreen />} />
                    <Route path='/recover_account_confirm' element={<RecoverAccountConfirmScreen />} />
                    <Route path='/privacy_terms' element={<PrivacyTerms />} />
                    <Route path='/use_terms' element={<UseTerms />} />
                    <Route path='/list' element={<CitCitasListScreen />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );

}

export default App;
