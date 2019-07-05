import { UserCredential } from '@firebase/auth-types';
import { IUnLoadUser } from 'src/interface/user.interface';

export const loginProcess = (data: UserCredential): IUnLoadUser => {
  if (!data.user) throw Error('user');
  const { displayName, photoURL, email } = data.user;

  if (!data.additionalUserInfo) throw Error('additionalUserInfo');
  const platformName = data.additionalUserInfo.providerId.slice(0, -4);

  if (!displayName) throw Error('displayName');
  if (!photoURL) throw Error('photoURL');
  if (!email) throw Error('email');

  const user: IUnLoadUser = {
    platformName,
    nickName: displayName,
    photos: photoURL,
    socialId: email,
  };

  return user;
};
