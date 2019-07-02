import navi_btn_chatPng from 'image/navi_btn_chat.png';
import navi_btn_friendPng from 'image/navi_btn_friend.png';
import navi_btn_morePng from 'image/navi_btn_more.png';
import * as React from 'react';
import './app.css';
import { LinkImage } from './LinkImage';

const navigation: React.SFC = () => {
  return (
    <div className="Nav">
      <LinkImage url="/" image={navi_btn_friendPng} />
      <LinkImage url="/talkRoomList" image={navi_btn_chatPng} />
      <LinkImage url="/navIbtn_more" image={navi_btn_morePng} />
    </div>
  );
};

export { navigation as Navigation };
