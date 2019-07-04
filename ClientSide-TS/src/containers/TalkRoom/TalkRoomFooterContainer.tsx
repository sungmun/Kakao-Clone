import { Footer } from 'components/TalkRoom/Footer';
import * as React from 'react';

const talkRoomFooterContainer: React.SFC = () => {
  const sendEvent = (message: string) => {
    console.log(message);
  };
  return <Footer sendEvent={sendEvent} />;
};

export { talkRoomFooterContainer as TalkRoomFooterContainer };
