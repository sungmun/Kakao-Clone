import { NONE } from 'actions/header';
import { LogoBox } from 'components/Login/LogoBox';
import { loginCheck } from 'hooks/LoginCheck';
import { logoutHook } from 'hooks/Logout';
import { setHeaderModeHook } from 'hooks/setHeaderMode';
import * as React from 'react';
import { Redirect } from 'react-router-dom';
import { SocialContainer } from 'src/containers/Login/SocialLoginContainer';
import './App.css';

const loginPage: React.SFC = () => {
  setHeaderModeHook(NONE);
  logoutHook();

  const isLoginSuccess = loginCheck();

  if (isLoginSuccess) return <Redirect to="/" />;

  return (
    <div className="LoginBox">
      <LogoBox />
      <SocialContainer />
      <div className="FooterBox">FooterBox</div>
    </div>
  );
};

export { loginPage as LoginPage };
