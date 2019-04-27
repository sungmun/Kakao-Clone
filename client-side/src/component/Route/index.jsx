import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import App from 'page/App';
import Login from 'page/Login';
import TalkRoom from 'page/TalkRoom';

export default () => (
  <BrowserRouter>
    <div>
      <Route exact path="/" component={App} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/talkRoom" component={TalkRoom} />
    </div>
  </BrowserRouter>
);
