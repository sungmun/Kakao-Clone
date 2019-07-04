import * as React from 'react';
import './app.css';
import { EmailCheck } from './EmailCheck';
import { IItemContentOp as IProps } from './ItemContentOp.interface';
import { LengthCheck } from './LengthCheck';

const itemContent: React.SFC<IProps> = ({
  Event,
  TabIndex,
  Name,
  Length,
  Email,
}) => {
  return (
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
};

export { itemContent as ItemContent };
