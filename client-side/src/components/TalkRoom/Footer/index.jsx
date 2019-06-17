import React, { useState, useEffect } from 'react';
import './app.scss';
import SendButton from './SendButton';

const Footer = () => {
  const [isChange, setIsChange] = useState(false);

  const onTextCheck = ({ target }) => {
    if (target.value.length > 0) {
      setIsChange(true);
    } else {
      setIsChange(false);
    }
  };

  return (
    <div className="Footer">
      <textarea name="talkArea" className="Textarea" onChange={onTextCheck} />
      <SendButton ischange={isChange} />
    </div>
  );
};

export default Footer;
