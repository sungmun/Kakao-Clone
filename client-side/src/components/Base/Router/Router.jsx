import { Login, Main, TalkRoom, TalkRoomList, UserList } from 'pages';
import { element } from 'prop-types';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './app.scss';

const Router = ({ location }) => (
  <Switch location={location}>
    <Route exact path="/login" component={Login} />
    <Route exact path="/userList" component={UserList} />
    <Route exact path="/talkRoom" component={TalkRoom} />
    <Route exact path="/" component={Main} />
    <Route exact path="/talkRoomList" component={TalkRoomList} />
  </Switch>
);

Router.propTypes = {
  location: element.isRequired,
};

export default Router;
