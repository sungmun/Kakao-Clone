import React from 'react';
import TalkRoom from './TalkRoom';

const TalkRoomList = ({ talkRoomList }) => {
  return talkRoomList.map((room, index) => (
    <li>
      <TalkRoom Room={room} Index={index} />
    </li>
  ));
};

export default TalkRoomList;
