import ImageLink from 'components/Base/ItemImage';
import { node, number, oneOfType, shape, string, func } from 'prop-types';
import React from 'react';
import ItemContent from './ItemContent';

import './app.scss';

const Item = ({ image, LinkOp, contentOp }) => (
  <div className="Item">
    <ImageLink image={image} url={LinkOp.url} id={LinkOp.id} />
    <ItemContent
      TabIndex={contentOp.TabIndex}
      Name={contentOp.Name}
      Email={contentOp.Email}
      Length={contentOp.Length}
      Event={contentOp.Event}
    />
  </div>
);

Item.propTypes = {
  image: oneOfType([node]).isRequired,
  LinkOp: shape({ url: string, id: number }).isRequired,
  contentOp: shape({
    TabIndex: number,
    Name: string,
    Email: string,
    Length: number,
    Event: func,
  }).isRequired,
};

export default Item;
