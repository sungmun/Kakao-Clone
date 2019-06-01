import Profile from 'component/Profile/index';
import React from 'react';
import { useSelector } from 'react-redux';

const FriendList = () => {
  const friend = useSelector(state => state.friendList);

  return (
    <div>
      {friend.data.map(user => (
        <Profile user={user} key={user.id} />
      ))}
    </div>
  );
};

export default FriendList;
