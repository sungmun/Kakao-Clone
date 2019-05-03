import React, { useEffect } from 'react';
import { string } from 'prop-types';
import SocialBox from 'component/socialBox';
import LogoIcon from 'image/kakao_logo.png';
import './App.scss';

import { connect } from 'react-redux';

const Login = ({ token }) => {
  useEffect(() => {
    if (!token) return;

    alert('로그아웃 되셨습니다.');
  }, []);

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

Login.propTypes = {
  token: string.isRequired,
};

export default connect(state => ({ token: state.token }))(Login);
