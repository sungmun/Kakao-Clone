import { MODE_SLIM } from 'actions/header';
import UserList from 'containers/UserList/UserListContainer';
import setHeaderMode from 'hooks/setHeaderMode';
import UserFilterHook from 'hooks/UserListFilter';
import UserlistHook from 'hooks/UserListLoad';
import React from 'react';
import './app.scss';

const UserlistPage = () => {
  const UserListData = UserlistHook();
  const filterList = UserFilterHook(UserListData);

  setHeaderMode(MODE_SLIM);

  return (
    <ul className="UserListPage">
      <UserList allUser={filterList} />
    </ul>
  );
};

export default UserlistPage;
