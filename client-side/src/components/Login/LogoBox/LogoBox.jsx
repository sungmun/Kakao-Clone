import LogoIcon from 'image/kakao_logo.png';
import React from 'react';
import './app.scss';

const LogoBox = () => {
  return (
    <div className="LogoBox">
      <img className="LogoIcon" width="130" src={LogoIcon} alt="logo" />
    </div>
  );
};

export default LogoBox;
