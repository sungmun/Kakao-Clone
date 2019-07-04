import { History } from 'history';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { IState } from 'src/reducer';

export const errorCheck = ({ push }: History) => {
  const { profile, talkRoomList, friendList } = useSelector(
    (state: IState) => state,
  );

  // tslint:disable-next-line:prefer-array-literal
  const isError = (...objs: Array<{ error?: Error }>) =>
    objs.find(({ error }) => error !== undefined) !== undefined;

  useEffect(() => {
    if (isError(profile, talkRoomList, friendList)) {
      push('/login');
    }
  }, [profile, talkRoomList, friendList]);
};
