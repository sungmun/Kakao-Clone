import React from 'react';
import { number, string, shape, arrayOf } from 'prop-types';
import Item from 'component/Item';
import './app.scss';

const attributeFilter = (frineds = [], attr) => frineds.map(val => val[attr]);

const nameView = (names = []) => {
  const nameStr = names.join(', ');

  return nameStr.length > 40 ? `${nameStr.slice(0, 39)}...` : nameStr;
};

const TalkRoom = ({ room, id }) => {
  const image = attributeFilter(room, 'photos');
  const nameArray = attributeFilter(room, 'nickName');

  const length = nameArray.length >= 2 ? nameArray.length + 1 : null;

  return (
    <Item image={image} url={`/talkRoom/${id}`}>
      <div className="Name">
        <div className="NameStr">{nameView(nameArray)}</div>
        <div className="Length">{length}</div>
      </div>
    </Item>
  );
};
const isStrRequired = string.isRequired;
TalkRoom.propTypes = {
  id: number.isRequired,
  room: arrayOf(
    shape({
      createdAt: isStrRequired,
      id: number.isRequired,
      nickName: isStrRequired,
      photos: isStrRequired,
      platformName: isStrRequired,
      socialId: isStrRequired,
      updatedAt: isStrRequired,
    }),
  ).isRequired,
};

export default TalkRoom;
