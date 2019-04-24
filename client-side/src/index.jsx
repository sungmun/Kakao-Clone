import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from 'serviceWorker';

import Route from 'component/Route';

import Provider from 'layout/Provider';

import 'index.scss';

ReactDOM.render(
  <Provider>
    <Route />
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
