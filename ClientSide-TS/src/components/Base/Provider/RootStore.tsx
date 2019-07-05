import * as React from 'react';
import { Provider } from 'react-redux';
import reducer from 'reducer';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reduxThunk from 'redux-thunk';

const rootStore: React.SFC = ({ children }) => {
  const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(reduxThunk)),
  );

  return <Provider store={store}>{children}</Provider>;
};


export { rootStore as Provider }