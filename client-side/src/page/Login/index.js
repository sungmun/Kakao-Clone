import React, { useEffect } from 'react';
import SocialBox from 'component/socialBox';
import './App.scss';
import LogoIcon from 'image/kakao_logo.png';

import { connect } from 'react-redux';

const Login = ({ token, history }) => {
    useEffect(() => {
        if (!token) return;

        alert('로그아웃 되셨습니다.');
    }, [token]);

    return (
        <div className="LoginBox">
            <div className="LogoBox">
                <img
                    className="LogoIcon"
                    width="130"
                    src={LogoIcon}
                    alt="logo"
                />
            </div>
            <SocialBox {...history} />

            <div className="FooterBox">FooterBox</div>
        </div>
    );
};

const tokenProps = state => {
    return { token: state.token };
};

export default connect(tokenProps)(Login);
