import React from 'react';
import logo from 'image/navi_img_logo.png';
import './app.scss';
import { node, arrayOf, oneOfType } from 'prop-types';

const Logo = ({ children }) => {
  return (
    <div className="Logo">
      <img src={logo} alt="logo" />
      {children}
    </div>
  );
};

Logo.propTypes = {
  children: oneOfType([arrayOf(node), node]),
};

Logo.defaultProps = {
  children: '',
};

export default Logo;
