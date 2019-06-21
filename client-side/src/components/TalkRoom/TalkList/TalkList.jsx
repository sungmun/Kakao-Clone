import React from 'react';
import { arrayOf, shape, number, string, bool } from 'prop-types';
import Talk from 'components/TalkRoom/Talk';
import './TalkList.scss';

const TalkListComponent = ({ talkList }) => {
  return (
    <ul>
      {talkList.map(talk => {
        return (
          <li className="TalkList">
            <Talk id={talk.id} message={talk.message} isUser={talk.isUser} />
          </li>
        );
      })}
    </ul>
  );
};

TalkListComponent.propTypes = {
  talkList: arrayOf(
    shape({
      id: number,
      message: string,
      isUser: bool,
    }),
  ).isRequired,
};

export default TalkListComponent;
