import { History } from 'history';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { IBase } from 'src/interface/redux.interface';
import { IState } from 'src/reducer';

export const errorCheck = ({ push }: History) => {
  const { profile, talkRoomList, friendList } = useSelector(
    (state: IState) => state,
  );

  const isError = (...objs: IBase[]) =>
    objs.find(({ error }) => error.message !== '') !== undefined;

  useEffect(() => {
    if (isError(profile, talkRoomList, friendList)) {
      push('/login');
    }
  }, [profile, talkRoomList, friendList]);
};
