import navi_img_logoPng from 'image/navi_img_logo.png';
import * as React from 'react';
import './app.css';

const header: React.SFC = ({ children }) => {
  return (
    <div className="Logo">
      <img src={navi_img_logoPng} alt="logo" />
      {children}
    </div>
  );
};

export { header as Header };
