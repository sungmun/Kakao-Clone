import User from 'components/UserList/User';
import { arrayOf, func, number, shape } from 'prop-types';
import React from 'react';

const userList = ({ FilterUser, Click }) => {
  return FilterUser.map((user, index) => (
    <User key={user.id} user={user} Index={index} Click={Click} />
  ));
};

userList.propTypes = {
  FilterUser: arrayOf(shape({ id: number })).isRequired,
  Click: func.isRequired,
};

export default userList;
