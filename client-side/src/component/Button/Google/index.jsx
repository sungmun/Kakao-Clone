import { setToken } from 'actions/token';
import { googleApi } from 'api-key.json';
import React from 'react';
import GoogleLogin from 'react-google-login';
import { useDispatch } from 'react-redux';
import './App.scss';

const Google = () => {
  const dispatch = useDispatch();

  const responseGoogle = res => {
    const profile = res.profileObj;
    dispatch(
      setToken({
        platformName: 'google',
        socialId: profile.email,
        nickName: profile.name,
        photos: profile.imageUrl,
      }),
    );
  };

  return (
    <div className="Container">
      <GoogleLogin
        clientId={googleApi}
        render={renderProps => (
          <button
            type="button"
            className="GoogleButton"
            onClick={renderProps.onClick}
          >
            Login with Google
          </button>
        )}
        onFailure={console.error}
        onSuccess={responseGoogle}
      />
    </div>
  );
};

export default Google;
