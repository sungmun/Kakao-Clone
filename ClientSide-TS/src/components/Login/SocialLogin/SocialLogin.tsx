import * as React from 'react';
import { IUser } from 'src/interface/user.interface';
import './app.css';

interface IProps {
  LoginEvent: (user: IUser) => void;
}

const socialBox: React.SFC<IProps> = ({ LoginEvent, children }) => {
  return <div className="SocialLoginBox">{children}</div>;
};

export { socialBox as SocialBox };
