import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import App from 'page/App';
import Login from 'page/Login';
import TalkRoomList from 'page/TalkRoomList';
import TalkRoom from 'page/TalkRoom';
import UserList from 'page/UserList';

export default () => (
  <BrowserRouter>
    <div>
      <Route exact path="/" component={App} />
      <Route exact path="/login" component={Login} />
      <Route path="/talkRoomList" component={TalkRoomList} />
      <Route path="/talkRoom" component={TalkRoom} />
      <Route exact path="/userList" component={UserList} />
    </div>
  </BrowserRouter>
);
