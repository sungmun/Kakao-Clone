import { useEffect, useState } from 'react';
import Axios from 'axios';

const useRequest = ({ method = 'get', url = '/' }, data, { token }) => {
    const [response, setResponse] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const requese = async () => {
        try {
            setLoading(true);
            const res = await Axios[method](`http://localhost:5000${url}`, {
                ...data,
                headers: {
                    'x-access-token': token
                }
            });
            setResponse(res);
        } catch (error) {
            setError(error);
        }
        setLoading(false);
    };
    useEffect(() => {
        requese();
    }, [method, url, data]);

    return [response, loading, error];
};

export default useRequest;
