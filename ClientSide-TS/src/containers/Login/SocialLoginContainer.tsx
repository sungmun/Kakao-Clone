import { setToken } from 'actions/token';
import { SocialBox } from 'components/Login/SocialLogin';
import * as React from 'react';
import { useDispatch } from 'react-redux';
import { IUser } from 'src/interface/user.interface';

const socialContainer: React.SFC<any> = () => {
  const dispatch = useDispatch();

  const onClick = (profile: IUser) => dispatch(setToken(profile));

  const loginEvent = async () => {
    console.log(test);
  };

  const onClickGoogle = () => loginEvent();
  const onClickFacebook = () => loginEvent();

  return (
    <SocialBox LoginEvent={onClick}>
      <button className="GoogleButton" onClick={onClickGoogle}>
        Login with Google
      </button>
      <button className="FacebookButton" onClick={onClickFacebook}>
        Login with facebook
      </button>
    </SocialBox>
  );
};

// const connect = withFirebase(socialContainer);

export { socialContainer as SocialContainer };
