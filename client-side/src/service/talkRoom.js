import axios from 'service/axios';

export const listTalkRoom = async token => {
  const res = await axios({ method: 'get', url: '/talk-room' }, { token });
  return res.talkRoomList;
};

export const TalkRoom = async (token, id) => {
  return { token, id };
};
