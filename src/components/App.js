import React from 'react';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';

import { ThemeProvider } from '@mui/material';
import { InstitutionalTheme } from './theme/InstitutionalTheme';

import { LoginScreen } from './auth/LoginScreen';
import { NewAccountScreen } from './auth/NewAccountScreen';
import { RecoverAccountScreen } from './auth/RecoverAccountScreen';


const Layout = () => {

    return(
        <ThemeProvider theme={InstitutionalTheme}>
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
                    <Route path='/recover_account' element={<RecoverAccountScreen />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );

}

export default App;
