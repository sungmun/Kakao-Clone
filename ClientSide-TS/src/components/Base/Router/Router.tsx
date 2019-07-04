import { Location } from 'history';
import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Login, Main, TalkRoom, TalkRoomList, UserList } from 'src/pages';
import './app.css';

interface IProps {
  location: Location;
}

const router: React.SFC<IProps> = ({ location }) => {
  return (
    <Switch location={location}>
      <Route exact={true} path="/login" component={Login} />
      <Route exact={true} path="/userList" component={UserList} />
      <Route exact={true} path="/talkRoom" component={TalkRoom} />
      <Route exact={true} path="/" component={Main} />
      <Route exact={true} path="/talkRoomList" component={TalkRoomList} />
    </Switch>
  );
};
export { router as Router };
