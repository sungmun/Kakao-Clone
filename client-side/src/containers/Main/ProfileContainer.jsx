import Profile from 'components/Main/Profile';
import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';

const ProfileContainer = () => {
  const { profile } = useSelector(state => state);

  if (profile === null) return <div>Loading...</div>;

  return (
    <Fragment>
      {' '}
      <span className="Profile">내 프로필</span>
      <Profile user={profile.data} Index={-1} />
    </Fragment>
  );
};

export default ProfileContainer;
