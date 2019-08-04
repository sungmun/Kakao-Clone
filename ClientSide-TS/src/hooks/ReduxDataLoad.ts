import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IBase } from 'src/interface/redux.interface';
import { IState } from 'src/reducer';
import { asyncListRead } from 'src/reducer/friend';
import { asyncProfile } from 'src/reducer/profile';
import { asyncTalkRoomList } from 'src/reducer/talkRoom';

export const reduxDataLoad = ({ pathname }: { pathname: string }) => {
  const { profile, talkRoomList, friendList } = useSelector(
    (state: IState) => state,
  );
  const dispatch = useDispatch();

  const dispatchHooks = ({ status }: IBase, event: () => void) => {
    if (!status) dispatch(event());
  };

  useEffect(() => {
    if (pathname !== '/login') {
      dispatchHooks(profile, asyncProfile);
      dispatchHooks(friendList, asyncListRead);
    }
  }, [pathname]);

  useEffect(() => {
    if (profile.status) {
      dispatchHooks(talkRoomList, asyncTalkRoomList);
    }
  }, [profile.status]);
};
