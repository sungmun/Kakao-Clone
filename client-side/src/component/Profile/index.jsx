import React from 'react';
import { shape, string, number } from 'prop-types';

import Item from 'component/Item';
import Info from 'component/Info';

const Profile = ({ user }) => {
  const { photos, nickName, id } = user;

  return (
    <Item image={new Array(photos)} url="/user" id={id}>
      <Info nickName={nickName} />
    </Item>
  );
};

Profile.propTypes = {
  user: shape({
    photos: string.isRequired,
    nickName: string.isRequired,
    id: number.isRequired,
  }).isRequired,
};

export default Profile;
