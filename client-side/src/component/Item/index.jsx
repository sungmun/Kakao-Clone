import React from 'react';

import { Link } from 'react-router-dom';
import { arrayOf, oneOfType, string, node, number } from 'prop-types';
import Image from 'component/ItemImage';
import './app.scss';

const Item = ({ image, children, url, id }) => (
  <li className="Item ">
    <Link to={{ pathname: url, state: { id } }}>
      <Image image={image} />
    </Link>
    <div className="Content">{children}</div>
  </li>
);

Item.propTypes = {
  children: oneOfType([arrayOf(node), node]).isRequired,
  image: oneOfType([node]).isRequired,
  url: string.isRequired,
  id: number.isRequired,
};

export default Item;
