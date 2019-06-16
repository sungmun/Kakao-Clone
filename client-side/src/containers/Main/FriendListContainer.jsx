import FriendList from 'components/Main/FriendList';
import React from 'react';
import { useSelector } from 'react-redux';

const FriendListContainer = () => {
  const { friendList } = useSelector(state => state);

  if (friendList === null) return <div>Loading...</div>;

  return <FriendList Friends={friendList.data} />;
};

export default FriendListContainer;
