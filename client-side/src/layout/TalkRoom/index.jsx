import React from 'react';

import { useSelector } from 'react-redux';
import { oneOfType, arrayOf, node, number } from 'prop-types';
import Base from 'layout/Base';
import Headers from './Header';
import Footers from './Footer';
import './app.scss';

const TalkRoom = ({ id, children }) => {
  const { data } = useSelector(({ talkRoomList }) => talkRoomList);

  const findData = data.find(talkroom => talkroom.id === id);

  if (findData === undefined) return <div>loading</div>;

  return (
    <Base>
      <div className="layout container">
        <Headers userlist={findData.userList} />
        <div className="Main">{children}</div>
        <Footers />
      </div>
    </Base>
  );
};

TalkRoom.propTypes = {
  id: number.isRequired,
  children: oneOfType([arrayOf(node), node]).isRequired,
};

export default TalkRoom;
