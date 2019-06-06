import React from 'react';
import { arrayOf, oneOfType, node } from 'prop-types';

import './app.scss';

const Base = ({ children }) => (
  <div className="Container container">{children}</div>
);

Base.propTypes = {
  children: oneOfType([arrayOf(node), node]).isRequired,
};

export default Base;
