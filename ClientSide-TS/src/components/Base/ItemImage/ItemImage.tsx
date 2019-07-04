import img_profile40_grayPng from 'image/img_profile40_gray.png';
import * as React from 'react';
import { Link } from 'react-router-dom';
import './app.css';
import { IImage as IProps } from './ItemImage.interface';

const itemImage: React.SFC<IProps> = ({ image, url, id }) => {
  const onImageError = ({ target }: React.ChangeEvent<HTMLImageElement>) => {
    target.src = img_profile40_grayPng;
  };

  return (
    <Link to={{ pathname: url, state: { id } }}>
      <div className={`DivRound length${image.length}`}>
        {image.map(img => (
          <div className="ImagePosition" key={img}>
            <img
              className="Image"
              src={img}
              alt="item"
              onError={onImageError}
            />
          </div>
        ))}
      </div>
    </Link>
  );
};

export { itemImage as ItemImage };
