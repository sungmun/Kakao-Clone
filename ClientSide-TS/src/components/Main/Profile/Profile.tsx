import { Item } from 'components/Base/Item';
import * as React from 'react';
import { IUser } from 'src/interface/user.interface';

interface IProps {
  user: IUser;
  Click?: () => void;
  Index: number;
}

const profileComponent: React.SFC<IProps> = ({ user, Click, Index }) => {
  const { photos, nickName, id } = user;
  return (
    <li>
      <Item
        image={[photos]}
        LinkOp={{ id, url: '/user' }}
        ContentOp={{ TabIndex: Index, Name: nickName, Event: Click }}
      />
    </li>
  );
};
export { profileComponent as Profile };
