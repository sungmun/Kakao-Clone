import { listTalkroom } from 'actions/talkRoom';
import TalkRoom from 'component/TalkRoom';
import Layout from 'layout/List';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

const list = () => {
  const dispatch = useDispatch();
  const { talkRoomList } = useSelector(state => ({
    talkRoomList: state.talkRoomList,
  }));

  useEffect(() => {
    if (!talkRoomList.status) dispatch(listTalkroom());
  }, []);

  if (talkRoomList.error !== null) return <Redirect to="/login" />;

  return (
    <Layout>
      {talkRoomList.data.map(({ id }, index) => (
        <TalkRoom key={id} id={index} />
      ))}
    </Layout>
  );
};

export default list;
