import { TalkRoomListContainer } from 'containers/TalkRoomList/TalkRoomListContainer';
import * as React from 'react';
import './app.css';

export class TalkRoomListPage extends React.Component {
  public render() {
    return (
      <ul className="TalkRoomListPage">
        <TalkRoomListContainer />
      </ul>
    );
  }
}
