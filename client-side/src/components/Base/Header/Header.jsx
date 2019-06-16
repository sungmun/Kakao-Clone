import React from 'react';
import logo from 'image/navi_img_logo.png';
import { oneOfType, arrayOf, node } from 'prop-types';
import './app.scss';

const Header = ({ children }) => (
  <div className="Logo">
    <img src={logo} alt="logo" />
    {children}
  </div>
);

Header.propTypes = {
  children: oneOfType([arrayOf(node), node]),
};

Header.defaultProps = {
  children: '',
};
export default Header;
