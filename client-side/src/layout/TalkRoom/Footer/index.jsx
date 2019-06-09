import React from 'react';
import './app.scss';

const SendButton = () => {
  return <div className="send" />;
};

const Footer = () => {
  return (
    <div className="Footer">
      <textarea name="talkArea" className="Textarea" cols="30" rows="10" />
      <SendButton />
    </div>
  );
};

export default Footer;
