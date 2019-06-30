import React from 'react';
import { useSelector } from 'react-redux';
import { arrayOf, node, number, oneOfType } from 'prop-types';
import Headers from 'components/TalkRoom/Header';
import FooterContainer from './TalkRoomFooterContainer';

const TalkRoomContainer = ({ id, children }) => {
  const { data } = useSelector(({ talkRoomList }) => talkRoomList);

  const findData = data.find(talkroom => talkroom.id === id);

  return (
    <div className="layout container">
      <Headers userlist={findData.userList} />
      <div className="Main">{children}</div>
      <FooterContainer />
    </div>
  );
};

TalkRoomContainer.propTypes = {
  id: number.isRequired,
  children: oneOfType([arrayOf(node), node]).isRequired,
};

export default TalkRoomContainer;
