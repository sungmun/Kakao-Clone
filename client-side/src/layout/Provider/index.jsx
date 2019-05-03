import React from 'react';
import { oneOfType, arrayOf, node } from 'prop-types';
import reducer from 'reducer';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const rootStore = ({ children }) => (
  <Provider store={createStore(reducer)}>{children}</Provider>
);

rootStore.propTypes = {
  children: oneOfType([arrayOf(node), node]).isRequired,
};

export default rootStore;
