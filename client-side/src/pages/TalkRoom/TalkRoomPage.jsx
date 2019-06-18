import React from 'react';

import { MODE_NONE } from 'actions/header';
import { shape, number } from 'prop-types';
import { Redirect } from 'react-router-dom';
import TalkRoomLayout from 'containers/TalkRoom/TalkRoomContainer';
import SetHeaderMode from 'hooks/setHeaderMode';

const TalkRoom = ({ location }) => {
  const { id } = location.state;
  if (id === undefined) return <Redirect to="/" />;

  SetHeaderMode(MODE_NONE);

  return <TalkRoomLayout id={id}>{id}</TalkRoomLayout>;
};

TalkRoom.propTypes = {
  location: shape({ state: shape({ id: number }) }).isRequired,
};

export default TalkRoom;
