import Profile from 'components/Main/Profile';
import { arrayOf, number, shape } from 'prop-types';
import React, { Fragment } from 'react';

const FriendList = ({ Friends }) => {
  return (
    <Fragment>
      <span className="Profile">{`친구 ${Friends.length}`}</span>
      {Friends.map((user, Index) => (
        <Profile user={user} key={user.id} Index={Index} />
      ))}
    </Fragment>
  );
};

FriendList.propTypes = {
  Friends: arrayOf(shape({ id: number })).isRequired,
};

export default FriendList;
