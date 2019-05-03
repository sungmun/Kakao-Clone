export default useRequest => {
    const [response, loading, error] = useRequest;

    if (error) {
        if (error.response.status === 403) {
            throw new Error('/login');
        }

        console.log(error.response);
        console.log(error.response.status);
        throw new Error('unexpectError', error);
    }

    if (loading || !response) {
        throw new Error('로딩중');
    }

    return response.data;
};
