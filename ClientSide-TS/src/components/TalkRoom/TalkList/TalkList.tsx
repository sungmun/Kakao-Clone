import * as React from 'react';
import { TalkContainer } from 'src/containers/TalkRoom/TalkContainer';
import { ITalk } from 'src/interface/talk.interface';
import './TalkList.css';

interface IProps {
  talkList: ITalk[];
}

const talkListComponent: React.SFC<IProps> = ({ talkList }) => (
  <section className="TalkList">
    <ul>
      {talkList.map(talk =>
        (
          <li key={talk.id} className="talkItem">
            <TalkContainer key={talk.id} talkData={talk} />
          </li>
        )
      )}
    </ul>
  </section>
);

export { talkListComponent as TalkListComponent };

