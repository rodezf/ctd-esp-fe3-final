import React, { useContext, useState, useEffect } from 'react';
import AppContext from '../context/AppContext';
import { ThemesContext } from './Themes';
import Card from './Card';

function Favorites() {
    const { dentists, theme } = useContext(AppContext);
    const themes = useContext(ThemesContext);
    const currentTheme = theme === 'light' ? themes.light : themes.dark;
    
    const [favoriteDentists, setFavoriteDentists] = useState([]);

    useEffect(() => {
        // Fetch favorite dentist IDs from localStorage
        const storedFavorites = localStorage.getItem('favorites');
        const favoriteIds = storedFavorites ? JSON.parse(storedFavorites) : [];

        // Filter out the dentists that match the IDs
        const favorites = dentists.filter(dentist => favoriteIds.includes(dentist.id));
        setFavoriteDentists(favorites);
    }, [dentists]);

    if (!favoriteDentists.length) return <div style={{ color: currentTheme.text }}>No favorites yet!</div>;

    return (
        <div style={{ background: currentTheme.background, color: currentTheme.text }}>
            {favoriteDentists.map(dentist => (
                <Card key={dentist.id} dentist={dentist} />
            ))}
        </div>
    );
}

export default Favorites;
