import * as React from 'react';
import './Talk.css';
import { ITalkAddProfile } from './Talk.interface';
interface IProps {
  talkData: ITalkAddProfile;
}

const talk: React.SFC<IProps> = ({ talkData }) => {
  return (
    <div className={`Talk ${talkData.isUser ? 'user' : 'friend'}`}>
      {talkData.message}
    </div>
  );
};

export { talk as Talk };
