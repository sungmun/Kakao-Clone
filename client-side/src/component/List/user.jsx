import Profile from 'component/Profile';
import { arrayOf, number, shape } from 'prop-types';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { add } from 'actions/friend/add';

const userComponent = ({ allUser }) => {
  const [userFilterList, setUserFilterList] = useState([]);
  const { friendList, profile } = useSelector(state => state);
  const dispatch = useDispatch();

  const filter = () => {
    const friend = friendList.data;
    if (friend.status) return allUser;
    return allUser.filter(({ id }) =>
      profile.data.id === id ? false : !friend.find(data => data.id === id),
    );
  };

  useEffect(() => {
    (async () => setUserFilterList(await filter()))();
  }, [allUser, friendList]);

  return (
    <div>
      {userFilterList.map(user => (
        <Profile key={user.id} user={user} Click={() => dispatch(add(user))} />
      ))}
    </div>
  );
};

userComponent.propTypes = {
  allUser: arrayOf(shape({ id: number })).isRequired,
};

export default userComponent;
