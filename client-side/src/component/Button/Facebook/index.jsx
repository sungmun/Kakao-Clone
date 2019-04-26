import React from 'react';
import { func } from 'prop-types';
import FacebookLogin from 'react-facebook-login';

import { facebookApi } from 'api-key.json';
import './App.scss';

const Facebook = ({ action }) => {
  const responseFacebook = res => {
    const user = {
      platformName: 'facebook',
      socialId: res.email,
      nickName: res.name,
      photos: res.picture.data.url,
    };
    action(user);
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

Facebook.propTypes = {
  action: func.isRequired,
};

export default Facebook;
