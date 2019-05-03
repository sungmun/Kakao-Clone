import React from 'react';
import { func } from 'prop-types';
import GoogleLogin from 'react-google-login';
import './App.scss';
import { googleApi } from 'api-key.json';

const Google = ({ action }) => {
  const responseGoogle = res => {
    const user = {
      platformName: 'google',
      socialId: res.profileObj.email,
      nickName: res.profileObj.name,
      photos: res.profileObj.imageUrl,
    };
    action(user);
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

Google.propTypes = {
  action: func.isRequired,
};

export default Google;
