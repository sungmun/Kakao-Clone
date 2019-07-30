import { TalkRoomContainer } from 'containers/TalkRoom/TalkRoomContainer';
import { Location } from 'history';
import { setHeaderModeHook } from 'hooks/setHeaderMode';
import * as React from 'react';
import { Redirect } from 'react-router-dom';
import { HeaderMode } from 'src/reducer/header';

interface IProps {
  location: Location<{ id: number }>;
}

const talkRoomPage: React.SFC<IProps> = ({ location }) => {
  const { id } = location.state;
  if (id === undefined) return <Redirect to="/" />;

  setHeaderModeHook(HeaderMode.NONE);

  return <TalkRoomContainer id={id}>{id}</TalkRoomContainer>;
};
export { talkRoomPage as TalkRoomPage };

