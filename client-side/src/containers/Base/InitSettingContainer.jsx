import DataLoad from 'hooks/ReduxDataLoad';
import ErrorCheck from 'hooks/ReduxErrorCheck';
import { arrayOf, func, node, oneOfType, shape, string } from 'prop-types';
import React, { Fragment } from 'react';
import { withRouter } from 'react-router-dom';

const RouterContainer = ({ history, location, children }) => {
  DataLoad(location);
  ErrorCheck(history);
  return <Fragment>{children}</Fragment>;
};

RouterContainer.propTypes = {
  children: oneOfType([arrayOf(node), node]).isRequired,
  location: shape({ pathname: string }).isRequired,
  history: shape({ push: func }).isRequired,
};

export default withRouter(RouterContainer);
