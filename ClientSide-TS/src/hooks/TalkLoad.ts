import { useEffect, useState } from 'react';
import { ITalk } from 'src/interface/talk.interface';
import { talkRoom } from 'src/service/talkRoom';

export const talkLoad = (id: number, token: string) => {
  const [talkList, setTalkList] = useState<ITalk[]>([]);

  useEffect(() => {
    (async () => {
      const talkRoomDetail = await talkRoom(token, id);
      console.log(talkRoomDetail);
      setTalkList(talkRoomDetail.TalkList);
    })();
  }, [id]);

  return talkList;
};
