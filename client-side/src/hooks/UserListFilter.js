import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const UserFilter = Userlist => {
  const [userFilterList, setUserFilterList] = useState([]);

  const { friendList, profile } = useSelector(state => state);

  const filter = () => {
    const friend = friendList.data;
    if (friend.status) return Userlist;
    return Userlist.filter(({ id }) =>
      profile.data.id === id ? false : !friend.find(data => data.id === id),
    );
  };

  useEffect(() => {
    (async () => setUserFilterList(await filter()))();
  }, [Userlist, friendList]);

  return userFilterList;
};

export default UserFilter;
