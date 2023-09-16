import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext, actionTypes } from '../context/stateManager';

const Card = ({ name, username, id }) => {
    const { dispatch, favorites } = useContext(AppContext);

    const isFavorite = favorites.includes(id);

    const toggleFavorite = () => {
        if (isFavorite) {
            dispatch({ type: actionTypes.REMOVE_FAVORITE, payload: id });
        } else {
            dispatch({ type: actionTypes.ADD_FAVORITE, payload: id });
        }
    };

    return (
        <div className="card">
            <Link to={`/dentist/${id}`}>
                <h3>{name}</h3>
                <p>{username} - {id}</p>
            </Link>
            <button onClick={toggleFavorite} className="favButton">
                {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
            </button>
        </div>
    );
};

export default Card;
