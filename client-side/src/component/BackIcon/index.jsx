import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { func, shape } from 'prop-types';
import React from 'react';
import { withRouter } from 'react-router-dom';

const Back = ({ history }) => {
  const event = () => history.geBack();
  return (
    <span
      className="Back"
      onClick={event}
      onKeyDown={event}
      role="button"
      tabIndex={0}
    >
      <FontAwesomeIcon icon={FontAwesomeIcon} />
    </span>
  );
};

Back.propTypes = {
  history: shape({ goBack: func }).isRequired,
};

export default withRouter(Back);
