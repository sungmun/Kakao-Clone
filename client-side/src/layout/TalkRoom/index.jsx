import React from 'react';
import { oneOfType, arrayOf, node } from 'prop-types';
import './app.scss';

const TalkRoom = ({ children }) => {
  const view = (
    <div className="layout">
      <header>머리</header>
      <main>{children}</main>
      <footer>발</footer>
    </div>
  );

  return view;
};

TalkRoom.propTypes = {
  children: oneOfType([arrayOf(node), node]).isRequired,
};

export default TalkRoom;
