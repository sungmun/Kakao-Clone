import axios from 'service/axios';

export const listTalkRoom = async token => {
  const { data } = await axios({ method: 'get', url: '/talk-room' }, { token });
  return data.talkRoomList;
};

export const TalkRoom = async (token, id) => {
  return { token, id };
};
