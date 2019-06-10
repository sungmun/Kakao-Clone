import Profile from 'image/img_profile40_gray.png';
import { node, number, oneOfType, string } from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import './app.scss';

const Image = ({ image, url, id }) => {
  const ImageOnError = ({ target }) => {
    target.src = Profile;
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
              onError={ImageOnError}
            />
          </div>
        ))}
      </div>
    </Link>
  );
};

Image.propTypes = {
  image: oneOfType([node]).isRequired,
  url: string.isRequired,
  id: number.isRequired,
};

export default Image;
