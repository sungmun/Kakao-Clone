import * as React from 'react';
import { useDispatch } from 'react-redux';
import { UserList } from 'src/components/UserList/UserList';
import { IUser } from 'src/interface/user.interface';
import { friendActions } from 'src/reducer/friend';

interface IProps {
  allUser: IUser[];
}

const userListContainer: React.SFC<IProps> = ({ allUser }) => {
  const dispatch = useDispatch()
  const onClick = (user: IUser) => dispatch(friendActions.setAddData(user))

  return <UserList FilterUser={allUser} Click={onClick} />;
};
export { userListContainer as UserListContainer };

