import HeaderContainer from 'containers/Base/HeaderContainer';
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './app.scss';
import InitSettingContainer from 'containers/Base/InitSettingContainer';
import RightAndLeftAnimation from './RightAndLeftAnimation';

const RouteInitSetting = () => (
  <BrowserRouter>
    <InitSettingContainer>
      <HeaderContainer />
      <Route render={RightAndLeftAnimation} />
    </InitSettingContainer>
  </BrowserRouter>
);

export default RouteInitSetting;
