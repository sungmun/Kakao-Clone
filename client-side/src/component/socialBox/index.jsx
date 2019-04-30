import React from 'react';
import { withRouter } from 'react-router-dom';
import { func, element } from 'prop-types';
import { connect } from 'react-redux';
import GoogleButton from 'component/Button/Google/index';
import FacebookButton from 'component/Button/Facebook/index';
import loginAction from 'event/login';
import { setToken } from 'actions/token';
import './app.scss';

const socialBox = ({ Login, history }) => {
  const login = async user => {
    try {
      const [token, path] = await loginAction(user);

      if (token) Login(token);
      history.push(path);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="SocialLoginBox">
      <GoogleButton action={login} />
      <FacebookButton action={login} />
    </div>
  );
};
socialBox.propTypes = {
  Login: func.isRequired,
  history: element.isRequired,
};

export default connect(
  null,
  dispatch => ({
    Login: token => dispatch(setToken(token)),
  }),
)(withRouter(socialBox));
