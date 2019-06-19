import { string, bool } from 'prop-types';
import React from 'react';

const Talk = ({ message, isUser }) => {
  return <div className={`Talk ${isUser ? 'user' : 'friend'}`}>{message}</div>;
};

Talk.propTypes = {
  message: string.isRequired,
  isUser: bool.isRequired,
};

export default Talk;
