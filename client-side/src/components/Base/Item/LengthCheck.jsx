import { number } from 'prop-types';
import React from 'react';
import './app.scss';

const LengthCheck = ({ length }) => {
  if (length > 1) {
    return <div className="Length">{length}</div>;
  }
  return null;
};

LengthCheck.propTypes = {
  length: number.isRequired,
};

export default LengthCheck;
