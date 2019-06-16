import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { BaseHeader, SlimHeader } from 'components/Base/Header';
import { MODE_NONE, MODE_SLIM } from 'actions/header';
import SearchBar from './SearchBarContainer';

const HeaderContainer = () => {
  const { mode } = useSelector(state => state.header);

  switch (mode) {
    case MODE_NONE:
      return null;
    case MODE_SLIM:
      return (
        <Fragment>
          <SlimHeader />
          <SearchBar />
        </Fragment>
      );
    default:
      return (
        <Fragment>
          <BaseHeader />
          <SearchBar />
        </Fragment>
      );
  }
};

export default HeaderContainer;
