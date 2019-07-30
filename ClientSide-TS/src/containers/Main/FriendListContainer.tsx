import { FriendList } from 'components/Main/FriendList';
import * as React from 'react';
import { useSelector } from 'react-redux';
import { IState } from 'src/reducer';

const friendListContainer: React.SFC = () => {
  const friendList = useSelector((state: IState) => state.friendList);

  if (friendList === null) return <div>Loading...</div>;

  return <FriendList Friends={Array.from(friendList.data.values())} />;
};
export { friendListContainer as FriendListContainer };
