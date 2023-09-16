import { useContext } from 'react';
import { AppContext } from '../context/AppContext';

function useTheme() {
    const { theme, setTheme } = useContext(AppContext);

    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    };

    return { theme, toggleTheme };
}

export default useTheme;
