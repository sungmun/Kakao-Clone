import * as React from 'react';
import './app.css';

interface IProps {
  email?: string;
}

const emailCheck: React.SFC<IProps> = ({ email }) => {
  if (email === undefined) return null;

  return <div className="Email">{email}</div>;
};

export { emailCheck as EmailCheck };
