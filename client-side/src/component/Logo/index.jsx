import logo from 'image/navi_img_logo.png';
import { arrayOf, node, oneOfType } from 'prop-types';
import React from 'react';
import './app.scss';

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
