import * as React from 'react';
import './app.css';

interface IProps {
  length?: number;
}

const lengthCheck: React.SFC<IProps> = ({ length }) => {
  if (length === undefined || length <= 1) return null;
  return <div className="Length">{length}</div>;
};

export { lengthCheck as LengthCheck };
