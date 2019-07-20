import * as React from 'react';
import { TalkContainer } from 'src/containers/TalkRoom/TalkContainer';
import { ITalk } from 'src/interface/talk.interface';
import './TalkList.css';

interface IProps {
  talkList: ITalk[];
}

/**
 * 178, 199, 217
 */
const talkListComponent: React.SFC<IProps> = ({ talkList }) => {

  const background: React.CSSProperties = {
    backgroundColor: 'rgb(178, 199, 217)',
    flex: 1
  }

  return (
    <section style={background}>
      <ul className="TalkList">
        {talkList.map(talk => {
          return (
            <li key={talk.id} className="talkItem">
              <TalkContainer key={talk.id} talkData={talk} />
            </li>
          );
        })}
      </ul >
    </section >
  );
};
export { talkListComponent as TalkListComponent };

