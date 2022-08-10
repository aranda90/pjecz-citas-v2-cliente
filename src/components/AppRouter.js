import React from 'react'

import { useSelector } from 'react-redux'

import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

import CancelCitaScreen from './citas/CancelCitaScreen'
import ListCitasScreen from './citas/ListCitasScreen'
import NewCitaScreen from './citas/NewCitaScreen'

import LogInScreen from './auth/LogInScreen'
import LogOutScreen from './auth/LogOutScreen'
import NewAccountScreen from './auth/NewAccountScreen'
import NewAccountConfirmScreen from './auth/NewAccountConfirmScreen'
import ProfileScreen from './auth/ProfileScreen'
import RecoverAccountScreen from './auth/RecoverAccountScreen'
import RecoverAccountConfirmScreen from './auth/RecoverAccountConfirmScreen'

import PrivacyTermsScreen from './static/PrivacyTermsScreen'
import UseTermsScreen from './static/UseTermsScreen'

import { CitasScreen } from './citas/CitasScreen'
import { InicioScreen } from './citas/InicioScreen'
import UpdatePasswordScreen from './auth/UpdatePasswordScreen'
import NotFound from './ui/NotFound'
import { PreguntasFrecuentes } from './ui/PreguntasFrecuentes'

const AppRouter = () => {       

    const PrivateRoute = ({ children }) => {

        const { isAuthenticated } = useSelector( state => state.auth )
        const token = window.localStorage.getItem('token')

        if( !isAuthenticated && !token ){
            return <Navigate to='/login' />
        }

        return children;
    }      
    
    return(

        <BrowserRouter>

            <Routes>
               
                <Route path='/' element={ <CitasScreen />  }  >
                
                    <Route element={ <InicioScreen /> } index />
                    <Route path='/citas' element={ <PrivateRoute> <ListCitasScreen /> </PrivateRoute>  } />
                    <Route path='/new' element={ <PrivateRoute> <NewCitaScreen /> </PrivateRoute> } />
                    <Route path='/cancel' element={ <CancelCitaScreen /> } />
                    <Route path='/login' element={ <LogInScreen /> } />
                    <Route path='/logout' element={ <LogOutScreen /> } />
                    <Route path='/new_account' element={ <NewAccountScreen /> } />
                    <Route path='/new_account_confirm' element={ <NewAccountConfirmScreen /> } />
                    <Route path='/profile' element={ <ProfileScreen /> } />
                    <Route path='/recover_account' element={ <RecoverAccountScreen /> } />
                    <Route path='/recover_account_confirm' element={ <RecoverAccountConfirmScreen /> } />
                    <Route path='/update' element={ <UpdatePasswordScreen /> } /> 
                    <Route path='/privacy_terms' element={ <PrivacyTermsScreen /> } />
                    <Route path='/use_terms' element={ <UseTermsScreen /> } />
                    <Route path='/preguntas_frecuentes' element={ <PreguntasFrecuentes /> } />

                    <Route path='*' element={ <NotFound />} />

                </Route>
                
            </Routes>

        </BrowserRouter>
        
    )
}

export default AppRouter
