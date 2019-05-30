import Add from 'component/Button/Add';
import FriendList from 'component/List/friend';
import Profile from 'component/Profile';
import Layout from 'layout/List';
import React from 'react';
import { useSelector } from 'react-redux';
import './App.scss';

const FriendView = () => {
  const friendLength = useSelector(({ friendList }) => friendList.data.length);
  return (
    <div>
      <span className="Profile">{`친구 ${friendLength}`}</span>
      <FriendList />
    </div>
  );
};

const Index = () => {
  const { profile } = useSelector(state => state);

  return (
    <Layout>
      <span className="Profile">내 프로필</span>
      <Profile user={profile.data} />
      <hr className="Line" />
      <FriendView />
      <Add url="/userlist" />
    </Layout>
  );
};

export default Index;
