import Item from 'components/Base/Item';
import { func, number, shape, string } from 'prop-types';
import React from 'react';

const User = ({ user, Click, Index }) => {
  const { photos, nickName, id } = user;
  return (
    <li>
      <Item
        image={new Array(photos)}
        LinkOp={{ url: '/user', id }}
        contentOp={{
          TabIndex: Index,
          Name: nickName,
          Event: () => Click(user),
        }}
      />
    </li>
  );
};

User.propTypes = {
  user: shape({
    photos: string.isRequired,
    nickName: string.isRequired,
    id: number.isRequired,
  }).isRequired,
  Index: number.isRequired,
  Click: func.isRequired,
};

export default User;
