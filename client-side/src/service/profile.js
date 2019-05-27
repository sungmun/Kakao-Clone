import axios from 'service/axios';

export const login = async user => {
  const res = await axios({ method: 'post', url: '/user' }, { data: { user } });
  return res.token;
};

export const getUser = async token => {
  const res = await axios({ method: 'get', url: '/user/auth' }, { token });
  return res.profile;
};

export const getFriend = async token => {
  const res = await axios({ method: 'get', url: '/friend' }, { token });
  return res.friend;
};

export const getUserList = async token => {
  const res = await axios({ method: 'get', url: '/user' }, { token });
  return res.userList;
};
