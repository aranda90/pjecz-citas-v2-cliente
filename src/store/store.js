import { applyMiddleware, combineReducers, compose, createStore } from 'redux';

import thunk from 'redux-thunk';

import { authReducer } from '../reducers/authReducer';
import { citasReducer } from '../reducers/citasReducer';
import { tokenReducer } from '../reducers/tokenReducer';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    auth: authReducer,   
    citas: citasReducer,
    token: tokenReducer,
});

export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware( thunk )
    )
);