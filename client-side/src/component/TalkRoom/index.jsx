import Item from 'component/Item';
import { number, shape, string, arrayOf } from 'prop-types';
import React from 'react';
import './app.scss';

const nameView = (names = []) => {
  const nameStr = names.join(', ');

  return nameStr.length > 40 ? `${nameStr.slice(0, 39)}...` : nameStr;
};

const TalkRoom = ({ talkroom }) => {
  const userListFilter = attr => talkroom.userList.map(val => val[attr]);
  const image = userListFilter('photos');
  const nameArray = userListFilter('nickName');

  const length = nameArray.length >= 2 ? nameArray.length + 1 : null;

  return (
    <Item image={image} url="/talkRoom" id={talkroom.id}>
      <div className="Name">
        <div className="NameStr">{nameView(nameArray)}</div>
        <div className="Length">{length}</div>
      </div>
    </Item>
  );
};

TalkRoom.propTypes = {
  talkroom: arrayOf(shape({ id: number, photos: string, nickName: string }))
    .isRequired,
};

export default TalkRoom;
