import { shape, string } from 'prop-types';
import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './app.scss';
import Router from './Router';

const RightAndLeftAnimation = ({ location }) => {
  return (
    <TransitionGroup id="Benchmark" className="container">
      <CSSTransition key={location.pathname} timeout={300} classNames="up-down">
        <Router location={location} />
      </CSSTransition>
    </TransitionGroup>
  );
};

RightAndLeftAnimation.propTypes = {
  location: shape({ pathname: string }).isRequired,
};

export default RightAndLeftAnimation;
