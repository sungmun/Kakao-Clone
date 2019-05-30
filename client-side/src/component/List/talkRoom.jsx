import React from 'react';
import { useSelector } from 'react-redux';
import ItemTalkRoom from 'component/TalkRoom';

const talkRoom = () => {
  const { talkRoomList } = useSelector(state => state);

  return (
    <div>
      {talkRoomList.data.map(room => (
        <ItemTalkRoom key={room.id} talkroom={room} />
      ))}
    </div>
  );
};

export default talkRoom;
