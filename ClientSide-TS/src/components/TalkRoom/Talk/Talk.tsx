import * as React from 'react';
import { ITalkAddProfile } from 'src/interface/talk.interface';
import './Talk.css';

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

