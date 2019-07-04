import { HeaderContainer } from 'containers/Base/HeaderContainer';
import * as React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { RouterContainer } from 'src/containers/Base/InitSettingContainer';
import './app.css';
import { Router } from './Router';

const routeInitSetting: React.SFC = () => {
  const rightAndLeftAnimation = ({ location }: any) => {
    return (
      <TransitionGroup id="Benchmark" className="container">
        <CSSTransition
          key={location.pathname}
          timeout={300}
          classNames="up-down"
        >
          <Router location={location} />
        </CSSTransition>
      </TransitionGroup>
    );
  };

  return (
    <BrowserRouter>
      <RouterContainer>
        <HeaderContainer />
        <Route render={rightAndLeftAnimation} />
      </RouterContainer>
    </BrowserRouter>
  );
};

export { routeInitSetting as RouteInitSetting };
