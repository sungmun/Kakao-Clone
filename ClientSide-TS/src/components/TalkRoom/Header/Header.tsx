import { UserListItem } from 'components/Base/UserListItem';
import * as React from 'react';
import { IUser } from 'src/interface/user.interface';
import './app.css';

interface IProps {
  userlist: IUser[];
}

const headerComponent: React.SFC<IProps> = ({ userlist }) => {
  return (
    <header>
      <UserListItem
        userList={userlist}
        Index={0}
        LinkOp={{ url: '#', id: -1 }}
      />
    </header>
  );
};

export { headerComponent as Header };
