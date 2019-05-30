import React, { useEffect, useState, memo } from 'react';
import Profile from 'component/Profile';
import { useSelector } from 'react-redux';

const user = ({ allUser }) => {
  const [userFilterList, setUserFilterList] = useState([]);
  const { friendList, profile } = useSelector(state => state);

  const filter = () => {
    const friend = friendList.data;
    if (friend.status) return allUser;
    return allUser.filter(({ id }) =>
      profile.data.id === id ? false : !friend.find(data => data.id === id),
    );
  };

  useEffect(() => {
    (async () => setUserFilterList(await filter()))();
  }, [allUser]);

  return (
    <div>
      {userFilterList.map(data => (
        <Profile key={data.id} user={data} />
      ))}
    </div>
  );
};

export default user;
