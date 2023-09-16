import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import { ThemesContext } from '../themes.jsx';
import { useParams } from 'react-router-dom';

function DentistDetail() {
    const { id } = useParams();
    const { dentists, theme } = useContext(AppContext);
    const themes = useContext(ThemesContext);
    const currentTheme = theme === 'light' ? themes.light : themes.dark;
    
    const dentist = dentists.find(d => d.id === parseInt(id));

    return (
        <div style={{ background: currentTheme.background, color: currentTheme.text }}>
            {dentist && (
                <>
                    <h2>{dentist.name}</h2>
                    <p>Email: {dentist.email}</p>
                    {/* Add other details as needed */}
                </>
            )}
        </div>
    );
}

export default DentistDetail;
