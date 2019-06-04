import React from 'react';
import Profile from 'image/img_profile40_gray.png';
import { oneOfType, node } from 'prop-types';
import './app.scss';

const Image = ({ image }) => {
  const ImageOnError = ({ target }) => {
    target.src = Profile;
  };

  return (
    <div className={`DivRound length${image.length}`}>
      {image.map(img => {
        return (
          <div className="ImagePosition" key={img}>
            <img
              className="Image"
              src={img}
              alt="item"
              onError={ImageOnError}
            />
          </div>
        );
      })}
    </div>
  );
};

Image.propTypes = {
  image: oneOfType([node]).isRequired,
};

export default Image;
