import { MODE_NONE } from 'actions/header';
import LogoBox from 'components/Login/LogoBox';
import SocialBox from 'containers/Login/SocialLoginContainer';
import setHeaderMode from 'hooks/setHeaderMode';
import React from 'react';
import { Redirect } from 'react-router-dom';
import './App.scss';
import LoginCheck from 'hooks/LoginCheck';
import LogoutHooks from 'hooks/LogoutHooks';

const Login = () => {
  setHeaderMode(MODE_NONE);
  LogoutHooks();

  const LoginSuccess = LoginCheck();

  if (LoginSuccess) return <Redirect to="/" />;

  return (
    <div className="LoginBox">
      <LogoBox />
      <SocialBox />
      <div className="FooterBox">FooterBox</div>
    </div>
  );
};

export default Login;
