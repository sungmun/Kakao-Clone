import axios from 'service/axios';

export const listTalkRoom = async (token: string) => {
  const { data } = await axios({ method: 'get', url: '/talk-room' }, { token });
  return data.talkRoomList;
};

export const talkRoom = async (token: string, id: number) => {
  const { data } = await axios(
    { method: 'get', url: `/talk-room/${id}` },
    { token },
  );
  return data;
};
