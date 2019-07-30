
import { BaseHeader, SlimHeader } from 'components/Base/Header';
import * as React from 'react';
import { useSelector } from 'react-redux';
import { IState } from 'src/reducer';
import { HeaderMode } from 'src/reducer/header';
import { SearchBarContainer } from './SearchBarContainer';

const headerContainer: React.SFC = () => {
  const { mode } = useSelector(({ header }: IState) => header);

  switch (mode) {
    case HeaderMode.NONE:
      return null;
    case HeaderMode.SLIM:
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

