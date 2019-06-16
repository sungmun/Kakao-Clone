import { googleApi } from 'api-key.json';
import { func } from 'prop-types';
import React from 'react';
import GoogleLogin from 'react-google-login';
import './app.scss';

const GoogleButton = ({ onClick }) => {
  const responseGoogle = ({ profileObj }) => {
    onClick({
      platformName: 'google',
      socialId: profileObj.email,
      nickName: profileObj.name,
      photos: profileObj.imageUrl,
    });
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

GoogleButton.propTypes = {
  onClick: func.isRequired,
};
export default GoogleButton;
