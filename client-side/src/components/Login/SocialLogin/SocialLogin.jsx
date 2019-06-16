import { func } from 'prop-types';
import React from 'react';
import './app.scss';
import FacebookButton from './FacebookButton';
import GoogleButton from './GoogleButton';

const socialBox = ({ LoginEvent }) => {
  return (
    <div className="SocialLoginBox">
      <GoogleButton onClick={LoginEvent} />
      <FacebookButton onClick={LoginEvent} />
    </div>
  );
};

socialBox.propTypes = {
  LoginEvent: func.isRequired,
};

export default socialBox;
