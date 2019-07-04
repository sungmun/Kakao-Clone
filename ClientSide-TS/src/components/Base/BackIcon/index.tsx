import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { withRouter } from 'react-router-dom';
import './app.css';

const backIconComponent: React.SFC<RouteComponentProps> = ({ history }) => {
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

const backIcon = withRouter(backIconComponent);

export { backIcon as BackIcon };
