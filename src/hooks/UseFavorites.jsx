import { useState } from 'react';

function useFavorites() {
    const [favorites, setFavorites] = useState(() => {
        const savedFavorites = localStorage.getItem('favorites');
        return savedFavorites ? JSON.parse(savedFavorites) : [];
    });

    const addFavorite = (dentist) => {
        const updatedFavorites = [...favorites, dentist];
        setFavorites(updatedFavorites);
        localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    };

    const removeFavorite = (dentistId) => {
        const updatedFavorites = favorites.filter(d => d.id !== dentistId);
        setFavorites(updatedFavorites);
        localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    };

    return { favorites, addFavorite, removeFavorite };
}

export default useFavorites;
