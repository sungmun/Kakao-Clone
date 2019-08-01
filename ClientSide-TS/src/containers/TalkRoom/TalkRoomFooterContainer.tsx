import { Footer } from 'components/TalkRoom/Footer';
import * as React from 'react';
import { useSelector } from 'react-redux';
import { IUnLoadTalk } from 'src/interface/talk.interface';
import { IUser } from 'src/interface/user.interface';
import { IState } from 'src/reducer/index';
import { SocketClient } from 'src/service/soket-io';

interface IProps {
  roomId: number
}
const talkRoomFooterContainer: React.SFC<IProps> = ({ roomId }) => {
  const { profile, token } = useSelector((state: IState) => state)
  const sendEvent = (message: string) => {
    const talk: IUnLoadTalk = {
      message,
      createdAt: new Date(),
      updatedAt: new Date(),
      userId: (profile.data as IUser).id
    }
    SocketClient.instanse.sendMessage(token.data, talk, roomId)
  };
  return <Footer sendEvent={sendEvent} />;
};

export { talkRoomFooterContainer as TalkRoomFooterContainer };

