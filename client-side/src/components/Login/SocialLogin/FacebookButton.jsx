import { facebookApi } from 'api-key.json';
import React from 'react';
import FacebookLogin from 'react-facebook-login';
import './app.scss';
import { func } from 'prop-types';

const FacebookButton = ({ onClick }) => {
  const responseFacebook = res => {
    onClick({
      platformName: 'facebook',
      socialId: res.email,
      nickName: res.name,
      photos: res.picture.data.url,
    });
  };

  return (
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
  );
};

FacebookButton.propTypes = {
  onClick: func.isRequired,
};

export default FacebookButton;
