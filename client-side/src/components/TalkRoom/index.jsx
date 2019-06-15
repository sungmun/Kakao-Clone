import { arrayOf, shape, oneOfType, node } from 'prop-types';
import React from 'react';
import './app.scss';
import Footers from './Footer';
import Headers from './Header';

const TalkRoom = ({ findUser, children }) => {
  if (findUser === undefined) return <div>loading</div>;

  return (
    <div className="layout container">
      <Headers userlist={findUser.userList} />
      <div className="Main">{children}</div>
      <Footers />
    </div>
  );
};

TalkRoom.propTypes = {
  findUser: shape({ userList: arrayOf() }).isRequired,
  children: oneOfType([arrayOf(node), node]).isRequired,
};

export default TalkRoom;
