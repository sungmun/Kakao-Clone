import React from 'react';
import './app.scss';
import { Link } from 'react-router-dom';
import { string } from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const addButton = ({ url }) => {
  return (
    <Link to={url}>
      <div className="AddButton">
        <FontAwesomeIcon icon={faPlus} size="2x" className="PlusIcon" />
      </div>
    </Link>
  );
};

addButton.propTypes = {
  url: string.isRequired,
};

export default addButton;
