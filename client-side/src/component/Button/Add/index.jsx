import React from 'react';
import './app.scss';
import { Link } from 'react-router-dom';
import { string } from 'prop-types';

const addButton = ({ url }) => {
  return (
    <Link to={url}>
      <div className="addButton" />
    </Link>
  );
};

addButton.propTypes = {
  url: string.isRequired,
};

export default addButton;
