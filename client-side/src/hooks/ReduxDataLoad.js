import { list as listFriend } from 'actions/friend/list';
import { getProfile } from 'actions/profile';
import { listTalkroom } from 'actions/talkRoom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const ReduxDataLoad = ({ pathname }) => {
  const { profile, talkRoomList, friendList } = useSelector(state => state);
  const dispatch = useDispatch();

  const dispatchHooks = ({ status }, event) => {
    if (!status) dispatch(event());
  };

  useEffect(() => {
    if (pathname !== '/login') {
      dispatchHooks(profile, getProfile);
      dispatchHooks(friendList, listFriend);
    }
  }, [pathname]);

  useEffect(() => {
    if (profile.status) {
      dispatchHooks(talkRoomList, listTalkroom);
    }
  }, [profile]);
};

export default ReduxDataLoad;
