import React from 'react';
import Footer from 'components/TalkRoom/Footer';

const TalkRoomFooterContainer = () => {
  const sendEvent = message => {
    console.log(message);
  };
  return <Footer sendEvent={sendEvent} />;
};

export default TalkRoomFooterContainer;
