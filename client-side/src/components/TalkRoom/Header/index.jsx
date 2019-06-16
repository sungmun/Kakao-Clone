import React from 'react';
import { string, shape, arrayOf } from 'prop-types';
import Image from 'components/Base/ItemImage';
import './app.scss';

const nameView = (names = []) => {
  const nameStr = names.join(', ');
  return nameStr.length > 40 ? `${nameStr.slice(0, 39)}...` : nameStr;
};

const header = ({ userlist }) => {
  const userListFilter = attr => userlist.map(val => val[attr]);
  const image = userListFilter('photos');
  const nameArray = userListFilter('nickName');
  const length = nameArray.length >= 2 ? nameArray.length + 1 : null;
  return (
    <header>
      <Image image={image} className="img" />
      <div className="Name">
        <div className="NameStr">{nameView(nameArray)}</div>
        <div className="Length">{length}</div>
      </div>
    </header>
  );
};

header.propTypes = {
  userlist: arrayOf(shape({ image: string, nickName: string })).isRequired,
};
export default header;
