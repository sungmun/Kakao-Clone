import { SET_TOKEN } from 'actions/token';
const initstate = {
    token: window.localStorage.getItem('token')
};

export default (state = initstate, action) => {
    switch (action.type) {
        case SET_TOKEN:
            window.localStorage.setItem('token', action.token);
            return { ...state, token: action.token };
        default:
            return state;
    }
};
