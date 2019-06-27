import React, { useState } from 'react';
import './app.scss';
import { func } from 'prop-types';
import SendButton from './SendButton';

const Footer = ({ sendEvent }) => {
  const [isChange, setIsChange] = useState(false);
  const [text, setText] = useState('');
  const onTextCheck = ({ target }) => {
    setText(target.value);
    if (target.value.length > 0) {
      setIsChange(true);
    } else {
      setIsChange(false);
    }
  };

  const sendText = () => {
    sendEvent(text);
  };

  return (
    <footer className="Footer">
      <textarea name="talkArea" className="Textarea" onChange={onTextCheck} />
      <SendButton ischange={isChange} sendEvent={sendText} />
    </footer>
  );
};

Footer.propTypes = {
  sendEvent: func.isRequired,
};

export default Footer;
