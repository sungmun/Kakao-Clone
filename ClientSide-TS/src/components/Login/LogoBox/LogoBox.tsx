import kakao_logoPng from 'image/kakao_logo.png';
import * as React from 'react';
import './app.css';

const logoBox: React.SFC = () => {
  return (
    <div className="LogoBox">
      <img className="LogoIcon" width="130" src={kakao_logoPng} alt="logo" />
    </div>
  );
};

export { logoBox as LogoBox };
