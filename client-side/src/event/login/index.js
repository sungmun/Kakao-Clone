import Axios from 'axios';

const action = async profile => {
    let token = null,
        path = '/',
        error = false;

    try {
        const res = await Axios.post('http://localhost:5000/user', {
            user: profile
        });

        token = res.data.token;
    } catch (e) {
        error = e;
        path = '/login';
    }
    return { token, path, error };
};

export default action;
