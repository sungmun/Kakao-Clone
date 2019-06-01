import axios from 'service/axios';

export const login = async user => {
  const { data } = await axios(
    { method: 'post', url: '/user' },
    { data: { user } },
  );
  return data.token;
};

export const getUser = async token => {
  const { data } = await axios({ method: 'get', url: '/user/auth' }, { token });
  return data.profile;
};

export const getFriend = async token => {
  const { data } = await axios({ method: 'get', url: '/friend' }, { token });
  return data.friend;
};

export const addFreind = async (token, id) => {
  await axios(
    { method: 'post', url: '/friend' },
    { token, data: { friend: id } },
  );
};

export const getUserList = async token => {
  const { data } = await axios({ method: 'get', url: '/user' }, { token });
  return data.userList;
};
