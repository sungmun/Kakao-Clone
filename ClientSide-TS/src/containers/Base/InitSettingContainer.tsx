import { reduxDataLoad } from 'hooks/ReduxDataLoad';
import { errorCheck } from 'hooks/ReduxErrorCheck';
import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { withRouter } from 'react-router-dom';

const initSettingContainer: React.SFC<RouteComponentProps> = ({
  history,
  location,
  children,
}) => {
  reduxDataLoad(location);
  errorCheck(history);
  return <React.Fragment>{children}</React.Fragment>;
};

const routerContainer = withRouter(initSettingContainer);

export { routerContainer as RouterContainer };
