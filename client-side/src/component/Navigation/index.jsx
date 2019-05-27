import Logo from 'component/Logo';
import talkRoom from 'image/navi_btn_chat.png';
import friend from 'image/navi_btn_friend.png';
import setting from 'image/navi_btn_more.png';
import { node, string } from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
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
  <div>
    <Logo />
    <div className="Nav">
      <NavLink url="/" image={friend} />
      <NavLink url="/talkRoomList" image={talkRoom} />
      <NavLink url="/setting" image={setting} />
    </div>
  </div>
);

export default Nav;
