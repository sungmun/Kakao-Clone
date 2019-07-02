import { ItemImage } from 'components/Base/ItemImage';
import * as React from 'react';
import { contentOp, ItemContent, linkOp } from '.';
import './app.css';

interface IProps {
  image: string[];
  LinkOp: linkOp;
  ContentOp: contentOp;
}

const item: React.SFC<IProps> = ({ image, LinkOp, ContentOp }) => {
  return (
    <div className="Item">
      <ItemImage image={image} url={LinkOp.url} id={LinkOp.id} />
      <ItemContent
        TabIndex={ContentOp.TabIndex}
        Name={ContentOp.Name}
        Email={ContentOp.Email}
        Length={ContentOp.Length}
        Event={ContentOp.Event}
      />
    </div>
  );
};

export { item as Item };
