import React from 'react';
import { shape, number } from 'prop-types';
import { Redirect } from 'react-router-dom';
import Layout from 'layout/TalkRoom';

const TalkRoom = ({ location }) => {
  if (location.state.id === undefined) return <Redirect to="/" />;

  return <Layout id={location.state.id}>{location.state.id}</Layout>;
};

TalkRoom.propTypes = {
  location: shape({ state: shape({ id: number }) }).isRequired,
};

export default TalkRoom;
