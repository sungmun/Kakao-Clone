import * as React from 'react';
import { useSelector } from 'react-redux';
import { Header } from 'src/components/TalkRoom/Header';
import { IState } from 'src/reducer';
import { TalkRoomFooterContainer } from './TalkRoomFooterContainer';

interface IProps {
  id: number;
}

const talkRoomContainer: React.SFC<IProps> = ({ id, children }) => {
  const { data } = useSelector(({ talkRoomList }: IState) => talkRoomList);
  const findData = data.find(talkroom => talkroom.id === id);

  if (findData === undefined) return <div>Loading...</div>;

  return (
    <div className="layout container">
      <Header userlist={findData.userList} />
      <div className="Main">{children}</div>
      <TalkRoomFooterContainer />
    </div>
  );
};

export { talkRoomContainer as TalkRoomContainer };
