import React from 'react';
import reducer from 'reducer';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
export default ({ children }) => (
    <Provider store={createStore(reducer)}>{children}</Provider>
);
