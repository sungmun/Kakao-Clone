import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import Layout from 'layout/List';
import TalkRoom from 'component/TalkRoom';

import { axiosUseEffect, axiosErrorCatch } from 'event/hooks/useRequest/index';
import { string } from 'prop-types';

const talkroomList = ({ token }) => {
  const talkRoomData = axiosUseEffect(
    { method: 'get', url: '/talk-room' },
    { token },
  );

  try {
    const { talkRoomList } = axiosErrorCatch(talkRoomData);

    return (
      <Layout>
        {talkRoomList.map(({ userList, id }) => (
          <TalkRoom key={id} room={userList} id={id} />
        ))}
      </Layout>
    );
  } catch (e) {
    return e.message === '/login' ? (
      <Redirect to={e.message} />
    ) : (
      <div>{e.message}</div>
    );
  }
};

talkroomList.propTypes = {
  token: string.isRequired,
};

export default connect(state => ({ token: state.token }))(talkroomList);
