import React from 'react';
import { Redirect } from 'react-router-dom';
import Layout from 'layout/List/index';
import Profile from 'component/Profile/index';
import { axiosUseEffect, axiosErrorCatch } from 'event/hooks/useRequest/index';

import './App.scss';

import { connect } from 'react-redux';
import { string } from 'prop-types';

const Index = ({ token }) => {
  const factory = url => axiosUseEffect({ method: 'get', url }, { token });

  const profileData = factory('/user');
  const friendData = factory('/friend');

  try {
    const { profile } = axiosErrorCatch(profileData);
    const { friend } = axiosErrorCatch(friendData);

    return (
      <Layout>
        <ul className="List">
          <span className="Profile">내 프로필</span>
          <Profile user={profile} />
          <hr className="Line" />
          <span className="Profile">
            친구
            {` ${friend.length}`}
          </span>
          {friend.map(user => (
            <Profile user={user} key={user.id} />
          ))}
        </ul>
      </Layout>
    );
  } catch (e) {
    return e.message === '/login' ? (
      <Redirect to={e.message} />
    ) : (
      <div>{e.message}</div>
    );
  }
};

Index.propTypes = {
  token: string.isRequired,
};

export default connect(({ token }) => ({ token }))(Index);
