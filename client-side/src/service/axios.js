import Axios from 'axios';
import { endPoint } from 'api-key.json';

export default async ({ method, url }, { token, data }) => {
  const res = await Axios({
    method,
    url: `${endPoint}${url}`,
    data,
    headers: {
      'x-access-token': token,
    },
  });
  return res;
};
