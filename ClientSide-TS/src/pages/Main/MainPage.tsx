import { AddButton } from 'components/Main/AddButton';
import { FriendListContainer } from 'containers/Main/FriendListContainer';
import { ProfileContainer } from 'containers/Main/ProfileContainer';
import * as React from 'react';
import './app.css';

const mainPage: React.SFC = () => {
  return (
    <ul className="MainPage">
      <ProfileContainer />
      <hr className="Line" />
      <FriendListContainer />
      <AddButton url="/userList" />
    </ul>
  );
};

export { mainPage as MainPage };
