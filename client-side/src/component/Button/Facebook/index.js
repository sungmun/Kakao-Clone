import React from 'react';
import FacebookLogin from 'react-facebook-login';

import { facebookApi } from 'api-key.json';
import './App.scss';

export default ({ action }) => {
    const responseFacebook = res => {
        const profile = {
            platformName: 'facebook',
            socialId: res.email,
            nickName: res.name,
            photos: res.picture.data.url
        };
        action(profile);
    };

    return (
        <div className="Container">
            <FacebookLogin
                appId={facebookApi}
                autoLoad={false}
                version="3.1"
                callback={responseFacebook}
                fields="name,email,picture"
                cssClass="FacebookButton"
            >
                Login with Facebook
            </FacebookLogin>
        </div>
    );
};
