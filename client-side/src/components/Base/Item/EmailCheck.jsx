import { string } from 'prop-types';
import React from 'react';
import './app.scss';

const EmailCheck = ({ email }) => {
  if (email === '') {
    return null;
  }
  return <div className="Email">{email}</div>;
};

EmailCheck.propTypes = {
  email: string.isRequired,
};

export default EmailCheck;
