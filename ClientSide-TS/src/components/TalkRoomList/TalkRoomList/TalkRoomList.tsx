import * as React from 'react';
import { ITalkRoom } from 'src/interface/talkRoom.interface';
import { TalkRoom } from './TalkRoom';

interface IProps {
  talkRoomList: ITalkRoom[];
}

const talkRoomListComponent: React.SFC<IProps> = ({ talkRoomList }) => {
  return (
    <React.Fragment>
      {talkRoomList.map((room, index) => (
        <li>
          <TalkRoom Room={room} Index={index} />
        </li>
      ))}
    </React.Fragment>
  );
};
export { talkRoomListComponent as TalkRoomList };
