import { IUser } from 'src/interface/user.interface';

export const USER_DATA = 'USER/ADD';
export const USER_LIST_DATA = 'USER/LIST/ADD';

export interface IUserData {
  user: IUser;
  type: typeof USER_DATA;
}

export interface IUserListData {
  userList: IUser[];
  type: typeof USER_LIST_DATA;
}

export const addUserSuccess = (user: IUser) => ({
  user,
  type: USER_DATA,
});

export const addUserListSuccess = (userList: IUser[]) => ({
  userList,
  type: USER_LIST_DATA,
});
