import SocialBox from 'component/socialBox';
import LogoIcon from 'image/kakao_logo.png';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import './App.scss';

const Login = () => {
  const { token } = useSelector(state => state);

  useEffect(() => {
    alert(`로그아웃 되셨습니다.`);
  }, []);

  useEffect(() => {
    if (token.error) alert(`로그인에 실패하셨습니다`);
  }, [token.error]);

  if (token.status) return <Redirect to="/" />;

  return (
    <div className="LoginBox">
      <div className="LogoBox">
        <img className="LogoIcon" width="130" src={LogoIcon} alt="logo" />
      </div>
      <SocialBox />
      <div className="FooterBox">FooterBox</div>
    </div>
  );
};

export default Login;
