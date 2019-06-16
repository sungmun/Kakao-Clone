import React from 'react';
import TalkRoom from './TalkRoom';

const TalkRoomList = ({ talkRoomList }) => {
  return talkRoomList.map((room, index) => (
    <TalkRoom Room={room} Index={index} />
  ));
};

export default TalkRoomList;
