import Item from 'components/Base/Item';
import { arrayOf, func, number, shape, string } from 'prop-types';
import React from 'react';

const UserComponent = ({ user, Click, Index }) => {
  const { photos, nickName, id } = user;
  return (
    <Item
      image={new Array(photos)}
      LinkOp={{ url: '/user', id }}
      contentOp={{ TabIndex: Index, Name: nickName, Event: () => Click(user) }}
    />
  );
};

const userList = ({ FilterUser, Click }) => {
  return FilterUser.map((user, index) => (
    <UserComponent key={user.id} user={user} Index={index} Click={Click} />
  ));
};

UserComponent.propTypes = {
  user: shape({
    photos: string.isRequired,
    nickName: string.isRequired,
    id: number.isRequired,
  }).isRequired,
  Index: number.isRequired,
  Click: func.isRequired,
};

userList.propTypes = {
  FilterUser: arrayOf(shape({ id: number })).isRequired,
  Click: func.isRequired,
};

export default userList;
