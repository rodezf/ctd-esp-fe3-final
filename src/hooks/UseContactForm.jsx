import { useState } from 'react';

function useContactForm() {
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

    return { formData, handleChange, handleSubmit, message };
}

export default useContactForm;
