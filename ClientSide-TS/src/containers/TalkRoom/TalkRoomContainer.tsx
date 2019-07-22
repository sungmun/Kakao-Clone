import * as React from 'react';
import { useSelector } from 'react-redux';
import { Header } from 'src/components/TalkRoom/Header';
import { TalkListComponent } from 'src/components/TalkRoom/TalkList';
import { talkLoad } from 'src/hooks/TalkLoad';
import { IState } from 'src/reducer';
import { TalkRoomFooterContainer } from './TalkRoomFooterContainer';

interface IProps {
  id: number;
}

const talkRoomContainer: React.SFC<IProps> = ({ id, children }) => {
  const { talkRoomList, token } = useSelector((state: IState) => state);
  const findData = talkRoomList.data.find(talkroom => talkroom.id === id);
  const talkList = talkLoad(id, token.data)

  if (!findData || !talkList) return <div>Loading...</div>;

  const sectionStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: "column"
  }

  return (
    <section className="layout container" style={sectionStyle}>
      <Header userlist={findData.userList} />
      <TalkListComponent talkList={talkList} />
      <TalkRoomFooterContainer />
    </section>
  );
};

export { talkRoomContainer as TalkRoomContainer };

