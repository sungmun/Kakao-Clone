import React from 'react';
import { shape, number } from 'prop-types';

import Layout from 'layout/TalkRoom';

const TalkRoom = ({ match }) => {
  const { params } = match;

  return <Layout>{params.id}</Layout>;
};

TalkRoom.propTypes = {
  match: shape({ params: shape({ id: number.isRequired }).isRequired })
    .isRequired,
};

export default TalkRoom;
