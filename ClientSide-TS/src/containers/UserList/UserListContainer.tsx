import { add } from 'actions/friend/add';
import * as React from 'react';
import { useDispatch } from 'react-redux';
import { UserList } from 'src/components/UserList/UserList';
import { IUser } from 'src/interface/user.interface';

interface IProps {
  allUser: IUser[];
}

const userListContainer: React.SFC<IProps> = ({ allUser }) => {
  const dispatch = useDispatch();
  const onClick = (user: IUser) => dispatch(add(user));

  return <UserList FilterUser={allUser} Click={onClick} />;
};
export { userListContainer as UserListContainer };
