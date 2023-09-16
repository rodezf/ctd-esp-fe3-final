import { createContext } from 'react';

export const lightTheme = {
    background: '#f7f7f7',
    text: '#333',
    cardBackground: '#ffffff',
    buttonBackground: '#e0e0e0'
};

export const darkTheme = {
    background: '#333',
    text: '#f7f7f7',
    cardBackground: '#444',
    buttonBackground: '#555'
};

export const ThemesContext = createContext();
