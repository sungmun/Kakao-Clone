import Init from 'layout/Init';
import App from 'page/App';
import Login from 'page/Login';
import TalkRoom from 'page/TalkRoom';
import TalkRoomList from 'page/TalkRoomList';
import UserList from 'page/UserList';
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

export default () => (
  <BrowserRouter>
    <Init>
      <Route exact path="/login" component={Login} />
      <Route exact path="/" component={App} />
      <Route path="/talkRoomList" component={TalkRoomList} />
      <Route path="/talkRoom" component={TalkRoom} />
      <Route exact path="/userList" component={UserList} />
    </Init>
  </BrowserRouter>
);
