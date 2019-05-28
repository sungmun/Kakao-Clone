import { useEffect, useState } from 'react';

import axios from 'event/Axios';

export default ({ method = 'get', url = '/' }, { data, token }) => {
    const [response, setResponse] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const useRequest = async () => {
        try {
            setLoading(true);
            const res = await axios({ method, url }, { token, data });
            setResponse(res);
        } catch (error) {
            setError(error);
        }
        setLoading(false);
    };

    useEffect(() => {
        useRequest();
    }, [method, url, data]);

    return [response, loading, error];
};
