import * as React from 'react';
import { BackIcon } from '../BackIcon';
import { Header } from './Header';

const slimHeader: React.SFC = () => {
  return (
    <Header>
      <BackIcon />
    </Header>
  );
};

export { slimHeader as SlimHeader };
