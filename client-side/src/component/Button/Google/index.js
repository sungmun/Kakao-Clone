import React from 'react';
import GoogleLogin from 'react-google-login';
import './App.scss';
import { googleApi } from 'api-key.json';

const Google = ({ action }) => {
    const responseGoogle = res => {
        const profile = {
            platformName: 'google',
            socialId: res.profileObj.email,
            nickName: res.profileObj.name,
            photos: res.profileObj.imageUrl
        };
        action(profile);
    };

    const responseFail = res => {
        console.error(res);
    };

    return (
        <div className="Container">
            <GoogleLogin
                clientId={googleApi}
                render={renderProps => (
                    <button
                        className="GoogleButton"
                        onClick={renderProps.onClick}
                    >
                        Login with Google
                    </button>
                )}
                onFailure={responseFail}
                onSuccess={responseGoogle}
            />
        </div>
    );
};

export default Google;
