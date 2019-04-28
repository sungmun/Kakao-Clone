import React from 'react';
import { string } from 'prop-types';
import './App.scss';

const Info = ({ nickName, email }) => (
  <div className="Info">
    <div className="Nickname">{nickName}</div>

    <div className="Email">{email}</div>
  </div>
);

Info.propTypes = {
  nickName: string.isRequired,
  email: string,
};

Info.defaultProps = {
  email: '',
};

export default Info;
