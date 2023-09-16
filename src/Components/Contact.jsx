import React, { useState, useContext } from 'react';
import AppContext from '../context/AppContext';
import { ThemesContext } from '../themes.jsx';

function Contacto() {
    const { theme } = useContext(AppContext);
    const themes = useContext(ThemesContext);
    const currentTheme = theme === 'light' ? themes.light : themes.dark;

    const [formData, setFormData] = useState({ fullName: '', email: '' });
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.fullName.length > 5 && formData.email.includes('@')) {
            setMessage(`Gracias ${formData.fullName}, te contactaremos cuanto antes vía mail`);
        } else {
            setMessage('Por favor verifique su información nuevamente');
        }
    };

    return (
        <div style={{ background: currentTheme.background, color: currentTheme.text }}>
            <h2>Contacto</h2>
            <form onSubmit={handleSubmit}>
                <input
                    style={{ background: currentTheme.buttonBackground, color: currentTheme.text }}
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Nombre completo"
                />
                <input
                    style={{ background: currentTheme.buttonBackground, color: currentTheme.text }}
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                />
                <button type="submit" style={{ background: currentTheme.buttonBackground, color: currentTheme.text }}>Enviar</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
}

export default Contacto;
