import talkRoom from 'image/navi_btn_chat.png';
import friend from 'image/navi_btn_friend.png';
import setting from 'image/navi_btn_more.png';
import { node, string } from 'prop-types';
import React from 'react';
import { NavLink } from 'react-router-dom';
import './app.scss';

const LinkImage = ({ url, image }) => {
  return (
    <NavLink exact to={url} activeClassName="active">
      <div className="IconBox">
        <img className="Icon" src={image} alt={image} />
      </div>
    </NavLink>
  );
};

LinkImage.propTypes = {
  url: string.isRequired,
  image: node.isRequired,
};

const Nav = () => (
  <div className="Nav">
    <LinkImage url="/" image={friend} />
    <LinkImage url="/talkRoomList" image={talkRoom} />
    <LinkImage url="/setting" image={setting} />
  </div>
);

export default Nav;
