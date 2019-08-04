import { LogoBox } from 'components/Login/LogoBox';
import { loginCheck } from 'hooks/LoginCheck';
import { logoutHook } from 'hooks/Logout';
import { setHeaderModeHook } from 'hooks/setHeaderMode';
import * as React from 'react';
import { Redirect } from 'react-router-dom';
import { SocialContainer } from 'src/containers/Login/SocialLoginContainer';
import { HeaderMode } from 'src/reducer/header';
import './App.css';

const loginPage: React.SFC = () => {
  setHeaderModeHook(HeaderMode.NONE);
  logoutHook();

  const isLoginSuccess = loginCheck();

  if (isLoginSuccess) return <Redirect to="/" />;

  return (
    <section className="LoginPage">
      <LogoBox />
      <SocialContainer />
      <div className="FooterBox">FooterBox</div>
    </section>
  );
};

export { loginPage as LoginPage };

