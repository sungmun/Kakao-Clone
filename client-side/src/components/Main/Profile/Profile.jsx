import Item from 'components/Base/Item';
import { func, number, shape, string } from 'prop-types';
import React, { memo } from 'react';

const Profile = ({ user, Click, Index }) => {
  const { photos, nickName, id } = user;
  return (
    <Item
      image={new Array(photos)}
      LinkOp={{ url: '/user', id }}
      contentOp={{ TabIndex: Index, Name: nickName, Event: Click }}
    />
  );
};

Profile.propTypes = {
  user: shape({
    photos: string.isRequired,
    nickName: string.isRequired,
    id: number.isRequired,
  }).isRequired,
  Index: number.isRequired,
  Click: func,
};

Profile.defaultProps = {
  Click: () => {},
};

export default memo(Profile);
