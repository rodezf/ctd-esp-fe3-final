import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

function Navbar() {
    const { theme, toggleTheme } = useContext(AppContext);

    return (
        <nav className={theme}>
            {/* Other navbar content */}
            <button onClick={toggleTheme}>
                Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
            </button>
        </nav>
    );
}

export default Navbar;
