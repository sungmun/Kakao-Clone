import { Mode, NONE, SLIM } from 'actions/header';
import { BaseHeader, SlimHeader } from 'components/Base/Header';
import * as React from 'react';
import { useSelector } from 'react-redux';
import { SearchBarContainer } from './SearchBarContainer';

const headerContainer: React.SFC = () => {
  const { mode } = useSelector(
    (state: {
      header: {
        mode: Mode;
      };
    }) => state.header,
  );

  switch (mode) {
    case NONE:
      return null;
    case SLIM:
      return (
        <React.Fragment>
          <SlimHeader />
          <SearchBarContainer />
        </React.Fragment>
      );
    default:
      return (
        <React.Fragment>
          <BaseHeader />
          <SearchBarContainer />
        </React.Fragment>
      );
  }
};
export { headerContainer as HeaderContainer };
