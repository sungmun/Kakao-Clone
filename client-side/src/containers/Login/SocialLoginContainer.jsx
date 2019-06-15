import { setToken } from 'actions/token';
import SocialLogin from 'components/Login/SocialLogin';
import React from 'react';
import { useDispatch } from 'react-redux';

const ProfileContainer = () => {
  const dispatch = useDispatch();

  return <SocialLogin LoginEvent={profile => dispatch(setToken(profile))} />;
};

export default ProfileContainer;
