import React, { useReducer, useEffect } from 'react';
import AppContext from '../context/AppContext';
import { initialState, actionTypes, appReducer } from './stateManager';

const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(appReducer, initialState);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => {
                dispatch({ type: actionTypes.SET_DENTISTS, payload: data });
            })
            .catch(error => {
                dispatch({ type: actionTypes.SET_ERROR, payload: error.message });
            });
    }, []);

    const toggleTheme = () => {
        const newTheme = state.theme === 'light' ? 'dark' : 'light';
        dispatch({ type: actionTypes.SET_THEME, payload: newTheme });
    };

    return (
        <AppContext.Provider value={{ ...state, toggleTheme }}>
            {children}
        </AppContext.Provider>
    );
};

export default AppProvider;
