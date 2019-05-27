import { listFriend } from 'actions/friend';
import Profile from 'component/Profile/index';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

const FriendList = () => {
  const dispatch = useDispatch();
  const friend = useSelector(state => state.friendList);

  useEffect(() => {
    if (!friend.status) dispatch(listFriend());
  }, []);

  if (friend.error !== null) return <Redirect to="/login" />;

  return (
    <div>
      {friend.data.map(user => (
        <Profile user={user} key={user.id} />
      ))}
    </div>
  );
};

export default FriendList;
