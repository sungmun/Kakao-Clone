import React from 'react';
import { shape, number } from 'prop-types';
import { Redirect } from 'react-router-dom';
import TalkRoomLayout from 'containers/TalkRoom/TalkRoomContainer';

const TalkRoom = ({ location }) => {
  const { id } = location.state;
  if (id === undefined) return <Redirect to="/" />;

  return <TalkRoomLayout id={id}>{id}</TalkRoomLayout>;
};

TalkRoom.propTypes = {
  location: shape({ state: shape({ id: number }) }).isRequired,
};

export default TalkRoom;
