import { string, func } from 'prop-types';
import React from 'react';
import './app.scss';

const SendButton = ({ ischange, sendEvent }) => {
  return (
    <button
      className={`send ${ischange ? 'active' : ''}`}
      type="button"
      onClick={sendEvent()}
    >
      <span className="Text">전송</span>
    </button>
  );
};

SendButton.propTypes = {
  ischange: string.isRequired,
  sendEvent: func.isRequired,
};

export default SendButton;
