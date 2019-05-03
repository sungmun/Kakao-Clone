import Axios from 'axios';

export default async ({ method, url }, { token, data }) => {
  const res = await Axios[method](`http://localhost:5000${url}`, {
    ...data,
    headers: {
      'x-access-token': token,
    },
  });
  return res;
};
