import { useState, useEffect } from 'react';

function useFetchDentists(apiUrl = 'https://jsonplaceholder.typicode.com/users') {
    const [dentists, setDentists] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(apiUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setDentists(data);
                setLoading(false);
            })
            .catch(err => {
                setError(err.message);
                setLoading(false);
            });
    }, [apiUrl]);

    return { dentists, loading, error };
}

export default useFetchDentists;
