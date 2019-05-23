import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { func, shape } from 'prop-types';
import React from 'react';
import './app.scss';
import { withRouter } from 'react-router-dom';

const Back = ({ history }) => {
  const event = () => history.goBack();
  return (
    <span
      className="Back"
      onClick={event}
      onKeyDown={event}
      role="button"
      tabIndex={0}
    >
      <FontAwesomeIcon icon={faAngleLeft} />
    </span>
  );
};

Back.propTypes = {
  history: shape({ goBack: func }).isRequired,
};

export default withRouter(Back);
