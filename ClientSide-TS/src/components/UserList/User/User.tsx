import { Item } from 'components/Base/Item';
import * as React from 'react';
import { IUser } from 'src/interface/user.interface';

interface IProps {
  user: IUser;
  Click: (user: IUser) => void;
  Index: number;
}

const userComponent: React.SFC<IProps> = ({ user, Click, Index }) => {
  const { id, photos, nickName } = user;
  return (
    <li>
      <Item
        image={[photos]}
        LinkOp={{ id, url: '/user' }}
        ContentOp={{
          TabIndex: Index,
          Name: nickName,
          Event: () => Click(user),
        }}
      />
    </li>
  );
};
export { userComponent as User };
