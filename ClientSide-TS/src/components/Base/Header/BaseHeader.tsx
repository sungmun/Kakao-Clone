import { Navigation } from 'components/Base/Navigation';
import * as React from 'react';
import { Header } from './Header';

const baseHeader: React.SFC = () => {
  return (
    <React.Fragment>
      <Header />
      <Navigation />
    </React.Fragment>
  );
};

export { baseHeader as BaseHeader };
