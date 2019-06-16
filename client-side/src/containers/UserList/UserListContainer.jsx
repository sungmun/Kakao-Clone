import { add } from 'actions/friend/add';
import UserList from 'components/UserList/UserList';
import { arrayOf, number, shape } from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';

const UserListContainer = ({ allUser }) => {
  const dispatch = useDispatch();

  return <UserList FilterUser={allUser} Click={user => dispatch(add(user))} />;
};

UserListContainer.propTypes = {
  allUser: arrayOf(shape({ id: number })).isRequired,
};

export default UserListContainer;
