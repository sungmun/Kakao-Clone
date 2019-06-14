import { MODE_SLIM } from 'actions/header';
import UserList from 'containers/UserList/UserListContainer';
import setHeaderMode from 'hooks/setHeaderMode';
import React from 'react';
import UserlistHook from 'hooks/UserListLoadingAction';
import './app.scss';

const UserlistPage = () => {
  const UserListData = UserlistHook();

  setHeaderMode(MODE_SLIM);

  return (
    <ul className="UserListPage">
      <UserList allUser={UserListData} />
    </ul>
  );
};

export default UserlistPage;
