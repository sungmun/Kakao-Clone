import TalkRoomList from 'components/TalkRoomList/TalkRoomList';
import React from 'react';
import { useSelector } from 'react-redux';

const TalkRoomListContainer = () => {
  const { talkRoomList } = useSelector(state => state);

  return <TalkRoomList talkRoomList={talkRoomList.data} />;
};

export default TalkRoomListContainer;
