import Item from 'components/Base/Item';
import { arrayOf, number, shape, string } from 'prop-types';
import React from 'react';

const nameJoin = (names = []) => {
  const nameStr = names.join(', ');
  return nameStr.length > 40 ? `${nameStr.slice(0, 39)}...` : nameStr;
};

const talkRoom = ({ Room, Index }) => {
  const userListFilter = attr => Room.userList.map(val => val[attr]);
  const image = userListFilter('photos');
  const nameArray = userListFilter('nickName');
  const names = nameJoin(nameArray);
  const length = nameArray.length >= 2 ? nameArray.length + 1 : null;
  return (
    <Item
      image={image}
      LinkOp={{ url: '/talkRoom', id: Room.id }}
      contentOp={{ TabIndex: Index, Name: names, Length: length }}
    />
  );
};

talkRoom.propTypes = {
  Room: arrayOf(shape({ id: number, photos: string, nickName: string }))
    .isRequired,
  Index: number.isRequired,
};

export default talkRoom;
