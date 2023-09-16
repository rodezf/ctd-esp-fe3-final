
import React, { createContext } from 'react';

// Initial state
export const initialState = {
    theme: 'light',
    dentists: [],
    loading: true,
    error: null,
    favorites: JSON.parse(localStorage.getItem('favorites')) || [] // Initialize favorites from localStorage or set to empty array
};

// Action Types
export const actionTypes = {
    SET_THEME: 'SET_THEME',
    SET_DENTISTS: 'SET_DENTISTS',
    SET_LOADING: 'SET_LOADING',
    SET_ERROR: 'SET_ERROR',
    ADD_FAVORITE: 'ADD_FAVORITE',
    REMOVE_FAVORITE: 'REMOVE_FAVORITE'
};

// Reducer function
export const appReducer = (state, action) => {
    switch (action.type) {
        case actionTypes.SET_THEME:
            return { ...state, theme: action.payload };
        case actionTypes.SET_DENTISTS:
            return { ...state, dentists: action.payload, loading: false };
        case actionTypes.SET_LOADING:
            return { ...state, loading: action.payload };
        case actionTypes.SET_ERROR:
            return { ...state, error: action.payload, loading: false };
        case actionTypes.ADD_FAVORITE:
            const newFavorites = [...state.favorites, action.payload];
            localStorage.setItem('favorites', JSON.stringify(newFavorites));
            return { ...state, favorites: newFavorites };
        case actionTypes.REMOVE_FAVORITE:
            const updatedFavorites = state.favorites.filter(id => id !== action.payload);
            localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
            return { ...state, favorites: updatedFavorites };
        default:
            return state;
    }


    
};
export const AppContext = createContext();