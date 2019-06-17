import { string } from 'prop-types';
import React, { useEffect, useState } from 'react';
import './app.scss';

const SendButton = ({ ischange }) => {
  const [sendClass, setSendClass] = useState('send');

  useEffect(() => {
    if (ischange === true) {
      setSendClass('send active');
    } else {
      setSendClass('send');
    }
  }, [ischange]);

  return (
    <div className={sendClass}>
      <span className="Text">전송</span>
    </div>
  );
};

SendButton.propTypes = {
  ischange: string.isRequired,
};

export default SendButton;
