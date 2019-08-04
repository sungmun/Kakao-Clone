import { AddButton } from 'components/Main/AddButton';
import { FriendListContainer } from 'containers/Main/FriendListContainer';
import { ProfileContainer } from 'containers/Main/ProfileContainer';
import * as React from 'react';
import './app.css';

const mainPage: React.SFC = () => {
  return (
    <section className="MainPage" >
      <ul className="MainList" >
        <ProfileContainer />
        <hr className="Line" />
        <FriendListContainer />
        <AddButton url="/userList" />
      </ul>
    </section>
  );
};

export { mainPage as MainPage };
