import Info from 'component/Info';
import Item from 'component/Item';
import { number, shape, string, func } from 'prop-types';
import React, { memo } from 'react';

const Profile = ({ user, Click }) => {
  const { photos, nickName, id } = user;
  return (
    <Item image={new Array(photos)} url="/user" id={id}>
      <div id={id} onClick={Click} onKeyDown={Click} role="button" tabIndex="0">
        <Info nickName={nickName} />
      </div>
    </Item>
  );
};

Profile.propTypes = {
  user: shape({
    photos: string.isRequired,
    nickName: string.isRequired,
    id: number.isRequired,
  }).isRequired,
  Click: func.isRequired,
};

export default memo(Profile);
