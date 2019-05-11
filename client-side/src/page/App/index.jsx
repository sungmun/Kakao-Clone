import { getProfile } from 'actions/profile';
import Add from 'component/Button/Add';
import FriendList from 'component/FriendList';
import Profile from 'component/Profile';
import Layout from 'layout/List';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import './App.scss';

const FriendView = () => {
  const friendLength = useSelector(({ friendList }) => friendList.data.length);
  return (
    <div>
      <span className="Profile">
        친구
        {` ${friendLength}`}
      </span>
      <FriendList />
    </div>
  );
};

const Index = () => {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.profile);

  useEffect(() => {
    if (!profile.status) dispatch(getProfile());
  }, []);

  if (profile.error !== null) return <Redirect to="/login" />;

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
