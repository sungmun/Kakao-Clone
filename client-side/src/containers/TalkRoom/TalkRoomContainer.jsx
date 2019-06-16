import Main from 'components/TalkRoom';
import React from 'react';
import { useSelector } from 'react-redux';
import { arrayOf, node, number, oneOfType } from 'prop-types';

const TalkRoomContainer = ({ id, children }) => {
  const { data } = useSelector(({ talkRoomList }) => talkRoomList);

  const findData = data.find(talkroom => talkroom.id === id);

  return <Main findUser={findData}>{children}</Main>;
};

TalkRoomContainer.propTypes = {
  id: number.isRequired,
  children: oneOfType([arrayOf(node), node]).isRequired,
};
export default TalkRoomContainer;
