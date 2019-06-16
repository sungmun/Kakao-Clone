import Navigation from 'components/Base/Navigation';
import React, { Fragment } from 'react';
import Header from './Header';

const BaseHeader = () => {
  return (
    <Fragment>
      <Header />
      <Navigation />
    </Fragment>
  );
};

export default BaseHeader;
