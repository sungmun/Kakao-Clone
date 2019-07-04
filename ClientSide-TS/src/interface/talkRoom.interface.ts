import { IUser } from './user.interface';

export interface ITalkRoom {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  userList: IUser[];
}
