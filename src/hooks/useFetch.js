import {useState} from 'react';

const useFetch = (callback) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const fetchingFunction = async () => {
        try {
            setLoading(true);
            await callback();
        } catch (e) {
            setError(e);
        } finally {
            setLoading(false);
        }
    }

    return [
        fetchingFunction,
        loading,
        error,

    ];

}

export default useFetch;