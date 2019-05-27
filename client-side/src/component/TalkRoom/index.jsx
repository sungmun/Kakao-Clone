import Item from 'component/Item';
import { number } from 'prop-types';
import React from 'react';
import { useSelector } from 'react-redux';
import './app.scss';

const attributeFilter = (frineds = [], attr) => frineds.map(val => val[attr]);

const nameView = (names = []) => {
  const nameStr = names.join(', ');

  return nameStr.length > 40 ? `${nameStr.slice(0, 39)}...` : nameStr;
};

const TalkRoom = ({ id }) => {
  const room = useSelector(state => state.talkRoomList.data[id]);

  const image = attributeFilter(room.userList, 'photos');
  const nameArray = attributeFilter(room.userList, 'nickName');

  const length = nameArray.length >= 2 ? nameArray.length + 1 : null;

  return (
    <Item image={image} url="/talkRoom" id={id}>
      <div className="Name">
        <div className="NameStr">{nameView(nameArray)}</div>
        <div className="Length">{length}</div>
      </div>
    </Item>
  );
};

TalkRoom.propTypes = {
  id: number.isRequired,
};

export default TalkRoom;
