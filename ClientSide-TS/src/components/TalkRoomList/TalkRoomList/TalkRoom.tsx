import * as React from 'react';
import { UserListItem } from 'src/components/Base/UserListItem';
import { ITalkRoom } from 'src/interface/talkRoom.interface';

interface IProps {
  Room: ITalkRoom;
  Index: number;
}

const talkRoom: React.SFC<IProps> = ({ Room, Index }) => {
  return (
    <UserListItem
      userList={Room.userList}
      LinkOp={{ url: '/talkRoom', id: Room.id }}
      Index={Index}
    />
  );
};
export { talkRoom as TalkRoom };
