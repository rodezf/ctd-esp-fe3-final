
import React, { useContext } from 'react';
import AppContext from './context/AppContext';
import { ThemesContext } from '../themes.jsx';
import Card from './Components/Card';
import { Link } from 'react-router-dom';

function Home() {
    const { dentists, loading, error, theme } = useContext(AppContext);
    const themes = useContext(ThemesContext);
    const currentTheme = theme === 'light' ? themes.light : themes.dark;

    if (loading) return <div style={{ color: currentTheme.text }}>Loading...</div>;
    if (error) return <div style={{ color: currentTheme.text }}>Error: {error}</div>;

    return (
        <div style={{ background: currentTheme.background, color: currentTheme.text }}>
            {dentists.map(dentist => (
                <div key={dentist.id}>
                    <Card dentist={dentist} />
                    <Link style={{ color: currentTheme.text }} to={`/dentist/${dentist.id}`}>See Details</Link>
                </div>
            ))}
        </div>
    );
}

export default Home;
