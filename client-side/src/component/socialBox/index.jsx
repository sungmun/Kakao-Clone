import React from 'react';

import GoogleButton from 'component/Button/Google/index';
import FacebookButton from 'component/Button/Facebook/index';

import './app.scss';

const socialBox = () => {
  return (
    <div className="SocialLoginBox">
      <GoogleButton />
      <FacebookButton />
    </div>
  );
};

export default socialBox;
