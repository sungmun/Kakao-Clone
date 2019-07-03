import { Talk } from 'components/TalkRoom/Talk';
import * as React from 'react';
import { ITalkAddProfile } from '../Talk/Talk.interface';
import './TalkList.scss';

interface IProps {
  talkList: ITalkAddProfile[];
}

const talkListComponent: React.SFC<IProps> = ({ talkList }) => {
  return (
    <ul>
      {talkList.map(talk => {
        return (
          <li key={talk.id} className="TalkList">
            <Talk talkData={talk} />
          </li>
        );
      })}
    </ul>
  );
};
export { talkListComponent as TalkListComponent };
