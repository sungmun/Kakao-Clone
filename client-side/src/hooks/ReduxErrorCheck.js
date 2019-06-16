import { useEffect } from 'react';
import { useSelector } from 'react-redux';

const ErrorCheck = ({ push }) => {
  const { profile, talkRoomList, friendList } = useSelector(state => state);

  const isError = (...objs) =>
    objs.find(({ error }) => error !== null) !== undefined;

  useEffect(() => {
    if (isError(profile, talkRoomList, friendList)) {
      push('/login');
    }
  }, [profile, talkRoomList, friendList]);
};

export default ErrorCheck;
