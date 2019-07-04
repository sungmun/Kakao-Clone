import { endPoint } from 'api-key.json';
import axios, { Method } from 'axios';

interface IProtocol {
  method: Method;
  url: string;
}

interface IData {
  token?: string | '';
  data?: object | {};
}

export default async (protocol: IProtocol, data: IData) => {
  const res = await axios({
    method: protocol.method,
    url: `${endPoint}${protocol.url}`,
    data: data.data,
    headers: {
      'x-access-token': data.token,
    },
  });
  return res;
};
