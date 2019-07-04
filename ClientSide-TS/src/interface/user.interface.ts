export interface IUser extends IUnLoadUser {
  id: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface IUnLoadUser {
  platformName: string;
  socialId: string;
  nickName: string;
  photos: string;
}
