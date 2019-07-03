import { IUser } from 'src/interface/user.interface';

export interface ITalk {
  id: number;
  message: string;
  user: IUser;
}

export interface ITalkAddProfile extends ITalk {
  isUser: boolean;
}
