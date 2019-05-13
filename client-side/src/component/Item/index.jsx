import React from 'react';
import Profile from 'image/img_profile40_gray.png';
import { Link } from 'react-router-dom';
import { arrayOf, oneOfType, string, node, number } from 'prop-types';
import './app.scss';

const imageDraw = (image, i) => {
  const ImageOnError = ({ target }) => {
    target.src = Profile;
  };

  return (
    <div className="ImagePosition" key={i}>
      <img className="Image" src={image} alt="item" onError={ImageOnError} />
    </div>
  );
};

const Item = ({ image, children, url, id }) => (
  <li className={`Item length${image.length}`}>
    <Link to={{ pathname: url, state: { id } }}>
      <div className="DivRound">{image.map(imageDraw)}</div>
      <div className="Content">{children}</div>
    </Link>
  </li>
);

Item.propTypes = {
  children: oneOfType([arrayOf(node), node]).isRequired,
  image: oneOfType([node]).isRequired,
  url: string.isRequired,
  id: number.isRequired,
};

export default Item;
