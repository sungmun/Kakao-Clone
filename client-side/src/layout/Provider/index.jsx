import React from 'react';
import { oneOfType, arrayOf, node } from 'prop-types';
import reducer from 'reducer';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const rootStore = ({ children }) => {
  const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(thunk)),
  );
  return <Provider store={store}>{children}</Provider>;
};

rootStore.propTypes = {
  children: oneOfType([arrayOf(node), node]).isRequired,
};

export default rootStore;
