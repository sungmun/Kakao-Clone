import Icon from 'component/BackIcon';
import UserList from 'component/List/user';
import Logo from 'component/Logo';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getUserList } from 'service/profile';

const UserlistPage = () => {
  const { token, friendList, profile } = useSelector(state => state);
  const [allUser, setAllUser] = useState([]);

  useEffect(() => {
    (async () => setAllUser(await getUserList(token.data)))();
  }, [friendList.status, profile.status]);

  return (
    <div className="Container">
      <Logo>
        <Icon />
      </Logo>
      <UserList allUser={allUser} />
    </div>
  );
};

export default UserlistPage;
