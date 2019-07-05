import * as React from 'react';
import { facebookProvider, googleProvider, providerType } from 'src/firebase/Firebase';
import './app.css';

interface IProps {
  LoginEvent: (provider: providerType) => void;
}

const socialBox: React.SFC<IProps> = ({ LoginEvent }) => {

  const onClickGoogle = () => LoginEvent(googleProvider);
  const onClickFacebook = () => LoginEvent(facebookProvider);

  return (
    <div className="SocialLoginBox">
      <button className="GoogleButton" onClick={onClickGoogle}>
        Login with Google
        </button>
      <button className="FacebookButton" onClick={onClickFacebook}>
        Login with facebook
      </button>
    </div>
  );
};

export { socialBox as SocialBox };

