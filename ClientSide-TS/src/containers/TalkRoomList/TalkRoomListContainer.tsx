import { TalkRoomList } from 'components/TalkRoomList/TalkRoomList';
import * as React from 'react';
import { useSelector } from 'react-redux';
import { IState } from 'src/reducer';

const talkRoomListContainer: React.SFC = () => {
  const { talkRoomList } = useSelector((state: IState) => state);

  return <TalkRoomList talkRoomList={talkRoomList.data} />;
};

export { talkRoomListContainer as TalkRoomListContainer };
