import axios from 'event/Axios';

export default async user => {
  try {
    const res = await axios(
      { method: 'post', url: '/user' },
      { data: { user } },
    );
    return [res.data.token, '/'];
  } catch (e) {
    throw new Error('/login', e);
  }
};
