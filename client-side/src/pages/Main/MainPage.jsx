import Add from 'components/Main/AddButton';
import FriendList from 'containers/Main/FriendListContainer';
import Profile from 'containers/Main/ProfileContainer';
import React from 'react';
import './app.scss';

const Main = () => {
  return (
    <ul className="MainPage">
      <Profile />
      <hr className="Line" />
      <FriendList />
      <Add url="/userList" />
    </ul>
  );
};

export default Main;
