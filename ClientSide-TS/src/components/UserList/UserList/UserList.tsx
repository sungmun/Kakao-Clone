import { User } from 'components/UserList/User';
import * as React from 'react';
import { IUser } from 'src/interface/user.interface';

interface IProps {
  FilterUser: IUser[];
  Click: (user: IUser) => void;
}

const userList: React.SFC<IProps> = ({ FilterUser, Click }) => {
  const filterUserMap = (user: IUser, index: number) => {
    return <User key={user.id} user={user} Index={index} Click={Click} />;
  };

  return <React.Fragment>{FilterUser.map(filterUserMap)}</React.Fragment>;
};
export { userList as UserList };
