import React from 'react';
import { connect } from 'react-redux';
import GoogleButton from 'component/Button/Google';
import FacebookButton from 'component/Button/Facebook';
import loginAction from 'event/login';
import { SocialLoginBox } from './app.scss';
import { setToken } from 'actions/token';
const socialBox = ({ Login, push }) => {
    const login = async profile => {
        const { token, path, error } = await loginAction(profile);
        if (error) return console.log(error);

        if (token) Login(token);

        push(path);
    };

    return (
        <div className={SocialLoginBox}>
            <GoogleButton action={login} />
            <FacebookButton action={login} />
        </div>
    );
};

const TokenDispatchToProps = dispatch => ({
    Login(token) {
        dispatch(setToken(token));
    }
});

export default connect(
    null,
    TokenDispatchToProps
)(socialBox);
