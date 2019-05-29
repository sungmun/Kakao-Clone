import TalkRoom from 'component/TalkRoom';
import Layout from 'layout/List';
import React from 'react';
import { useSelector } from 'react-redux';

const list = () => {
  const { talkRoomList } = useSelector(state => state);

  return (
    <Layout>
      {talkRoomList.data.map(({ id }, index) => (
        <TalkRoom key={id} id={index} />
      ))}
    </Layout>
  );
};

export default list;
