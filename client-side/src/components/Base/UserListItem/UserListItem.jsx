import Item from 'components/Base/Item';
import { arrayOf, number, shape, string } from 'prop-types';
import React from 'react';
import nameJoin from './NameJoin';

const UserListItem = ({ userList, Index, LinkOp }) => {
  const userListFilter = attr => userList.map(val => val[attr]);
  const image = userListFilter('photos');
  const nameArray = userListFilter('nickName');
  const names = nameJoin(nameArray);
  const length = nameArray.length >= 2 ? nameArray.length + 1 : null;
  return (
    <Item
      image={image}
      LinkOp={LinkOp}
      contentOp={{ TabIndex: Index, Name: names, Length: length }}
    />
  );
};

UserListItem.propTypes = {
  userList: arrayOf(shape({ id: number, photos: string, nickName: string }))
    .isRequired,
  Index: number.isRequired,
  LinkOp: shape({ url: string, id: number }).isRequired,
};

export default UserListItem;
