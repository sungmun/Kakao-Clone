import { sign } from 'jsonwebtoken';
import { secret } from '../../private-key.json';
import { User } from '../database/models/User.model';
import { CoustomError } from '../index';

export class UserService {
  public login = async (profile: any) => {
    if (!profile) throw new CoustomError('유저 정보가 없습니다', 403);

    let findUser = await User.findOne({
      where: {
        platformName: profile.platformName,
        socialId: profile.socialId,
      },
    });

    if (!findUser) findUser = await User.create(profile);
    else {
      findUser.photos = profile.photos;
      findUser.save();
    }

    const token = await sign({ id: findUser.id }, secret, { expiresIn: '3h' });
    return token;
  };

  public userList = async (profile: any) => {
    if (!profile) throw new CoustomError('유저 정보가 없습니다', 403);

    const userListData = await User.findAll();
    userListData.map((user: any) => user.get({ plain: true }));
    return userListData;
  };

  public check = async (profile: any) => {
    if (profile) {
      return profile;
    }
    return null;
  };
}
