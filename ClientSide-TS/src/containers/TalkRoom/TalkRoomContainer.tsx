import * as React from 'react';
import { useSelector } from 'react-redux';
import { Header } from 'src/components/TalkRoom/Header';
import { talkLoad } from 'src/hooks/TalkLoad';
import { IUser } from 'src/interface/user.interface';
import { IState } from 'src/reducer';
import { TalkListContainer } from './TalkListContainer';
import { TalkRoomFooterContainer } from './TalkRoomFooterContainer';

interface IProps {
  id: number;
}

const talkRoomContainer: React.SFC<IProps> = ({ id }) => {
  const [findTalkRoomUserList, setFindTalkRoomUserList] = React.useState<IUser[]>([])
  const { talkRoomList } = useSelector((state: IState) => state);

  talkLoad(id)

  React.useEffect(() => {
    if (!talkRoomList.data) return
    const findData = talkRoomList.data.find(talkroom => talkroom.id === id);
    if (findData) setFindTalkRoomUserList(findData.userList)
  }, [talkRoomList.data])

  return (
    <section style={{
      display: 'flex',
      flexDirection: "column"
    }}>
      <Header userlist={findTalkRoomUserList} />
      <TalkListContainer id={id} />
      <TalkRoomFooterContainer roomId={id} />
    </section>
  );
};

export { talkRoomContainer as TalkRoomContainer };

