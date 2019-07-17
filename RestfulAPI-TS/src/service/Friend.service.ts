import { User } from './../database/models/User.model';
import { CoustomError } from '../index';
import { Friend } from '../database/models';

export class FriendService {
  public read = async (profile: any) => {
    const user = User.build(profile);

    if (!user) throw new CoustomError('잘못된 사용자입니다', 404);

    const friendList = <User[]>await user.$get<User>('friendList');

    const plainFriendList = friendList.map(user => {
      const plainUser = user.get({ plain: true });
      delete plainUser.Friend;
      return plainUser;
    });

    return plainFriendList;
  };

  public save = async (user: any, friend: any) => {
    const [friendLoad, isFind] = await Friend.findOrCreate({
      where: {
        userId: user.id,
        friendId: friend,
      },
    });
    return friendLoad;
  };

  public remove = async (user: any, friend: any) => {
    await Friend.destroy({
      where: {
        userId: user.id,
        friendId: friend,
      },
    });

    return true;
  };
}
