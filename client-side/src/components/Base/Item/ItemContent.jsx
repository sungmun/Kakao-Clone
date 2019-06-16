import { func, number, string } from 'prop-types';
import React from 'react';
import './app.scss';
import EmailCheck from './EmailCheck';
import LengthCheck from './LengthCheck';

const Item = ({ TabIndex, Name, Email, Length, Event }) => (
  <div
    className="Content"
    onClick={Event}
    onKeyDown={Event}
    role="button"
    tabIndex={TabIndex}
  >
    <div className="Name">
      <div className="NameStr">{Name}</div>
      <LengthCheck length={Length} />
    </div>
    <EmailCheck email={Email} />
  </div>
);

Item.propTypes = {
  TabIndex: number.isRequired,
  Name: string.isRequired,
  Email: string,
  Length: number,
  Event: func.isRequired,
};

export default Item;

Item.defaultProps = {
  Email: '',
  Length: 0,
};
