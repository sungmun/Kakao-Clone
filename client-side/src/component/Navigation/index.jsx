import React from 'react';
import { string, node } from 'prop-types';
import { Link } from 'react-router-dom';

import friend from 'image/navi_btn_friend.png';
import talkRoom from 'image/navi_btn_chat.png';
import setting from 'image/navi_btn_more.png';
import logo from 'image/navi_img_logo.png';

import './app.scss';

const NavLink = ({ url, image }) => {
  return (
    <Link to={url}>
      <div className="IconBox">
        <img className="Icon" src={image} alt={image} />
      </div>
    </Link>
  );
};

NavLink.propTypes = {
  url: string.isRequired,
  image: node.isRequired,
};

const Nav = () => (
  <div className="Nav">
    <img src={logo} alt="logo" />
    <div>
      <NavLink url="/" image={friend} />
      <NavLink url="/talkRoom" image={talkRoom} />
      <NavLink url="/setting" image={setting} />
    </div>
  </div>
);

export default Nav;
