import React from 'react';
import { useDispatch } from 'react-redux';
import FacebookLogin from 'react-facebook-login';

import { setToken } from 'actions/token';
import { facebookApi } from 'api-key.json';
import './App.scss';

const Facebook = () => {
  const dispatch = useDispatch();

  const responseFacebook = res => {
    const user = {
      platformName: 'facebook',
      socialId: res.email,
      nickName: res.name,
      photos: res.picture.data.url,
    };
    dispatch(setToken(user));
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

export default Facebook;
