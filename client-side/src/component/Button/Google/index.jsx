import React from 'react';
import { useDispatch } from 'react-redux';
import GoogleLogin from 'react-google-login';

import { setToken } from 'actions/token';
import { googleApi } from 'api-key.json';
import './App.scss';

const Google = () => {
  const dispatch = useDispatch();

  const responseGoogle = res => {
    const user = {
      platformName: 'google',
      socialId: res.profileObj.email,
      nickName: res.profileObj.name,
      photos: res.profileObj.imageUrl,
    };
    dispatch(setToken(user));
  };

  const responseFail = res => {
    console.error(res);
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
        onFailure={responseFail}
        onSuccess={responseGoogle}
      />
    </div>
  );
};

export default Google;
