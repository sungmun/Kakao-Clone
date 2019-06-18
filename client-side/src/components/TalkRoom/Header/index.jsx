import React from 'react';
import { string, shape, arrayOf } from 'prop-types';
import UserListItem from 'components/Base/UserListItem';
import './app.scss';

const header = ({ userlist }) => {
  return (
    <header>
      <UserListItem userList={userlist} Index={0} LinkOp={{ url: '#' }} />
    </header>
  );
};

header.propTypes = {
  userlist: arrayOf(shape({ image: string, nickName: string })).isRequired,
};
export default header;
