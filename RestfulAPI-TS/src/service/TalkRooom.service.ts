import { UserTalkRoom } from '../database/models';
import { Talk } from '../database/models/Talk.model';
import { TalkRoom } from '../database/models/TalkRoom.model';
import { User } from '../database/models/User.model';
import { CoustomError } from '../index';

export class TalkRoomService {
  private paramsErrorThrow(isbool: boolean) {
    if (isbool) {
      throw new CoustomError('파라미터 값이 올바르지 않습니다', 403);
    }
  }

  private plainData = (data: any) => data.get({ plain: true });

  private deleteAndPlainData = (data: any) => {
    const plainData = this.plainData(data);
    delete plainData.UserTalkRoom;
    return plainData;
  };
  /**
   * @description array2의 값중에 array1의 값이 없는경우 false를 반환
   * 객체비교 방법을 찾지못해 json형식으로 변환후 문자열 비교형식으로 비교
   * @param  array1 array2보다 작은 배열이어야한다
   * @param  array2 array1보다 큰 배열이어한다
   */
  private arrayEqual = <T>(array1: T[], array2: T[]) => {
    for (const item of array1) {
      if (!array2.find(val => JSON.stringify(item) === JSON.stringify(val))) {
        return false;
      }
    }
    return true;
  };
  /**
   * @description user값을 기반으로 talkRoomList를 검색을 하며,
   * 검색한 talkRoom에서 UserList값을 기반으로 이미 있는값인지 아닌지 확인을한다.
   * 이때 Model상태에서 비교를 하면, UserTalkRoom값 때문에 제대로 비교가 않되기에 순수데이터로 변경후 UserTalkRoom값을 제거해주었다
   */
  private talkRoomFind = async (user: User, friendList: User[]) => {
    const loadTalkRoom = <TalkRoom[]>await user.$get('talkRoomList');
    const plainFrinedList = friendList.map(this.plainData);

    for (const talkRoom of loadTalkRoom) {
      const loadUserList = <User[]>await talkRoom.$get('userList');
      const plainLoadUserList = loadUserList.map(this.deleteAndPlainData);

      if (
        friendList.length + 1 !== loadUserList.length ||
        !this.arrayEqual(plainFrinedList, plainLoadUserList)
      ) {
        break;
      }
      return this.deleteAndPlainData(talkRoom);
    }
    return false;
  };
  /**
   * @description talkRoom을 검색을해서 이미 있는 talkRoom인경우 찾아서 있는 talkRoom을반환한다.
   * 아닌경우 talkRoom을 생성해서 유저를 추가한다
   */
  public save = async (user: any, friends?: any) => {
    this.paramsErrorThrow(!friends || !Array.isArray(friends));

    const loadUser = await User.build(user).reload();
    const loadFriend = await Promise.all<User>(
      friends.map(async (friend: any) => await User.build(friend).reload()),
    );

    const findTalkRoom = await this.talkRoomFind(loadUser, loadFriend);
    if (findTalkRoom) return findTalkRoom;

    const talkRoom = await TalkRoom.create();

    talkRoom.$add('userList', loadUser);
    loadFriend.forEach(friend => talkRoom.$add('userList', friend));

    return talkRoom.get({ plain: true });
  };

  public read = async (talkRoomId?: number) => {
    const talkRoom = { id: talkRoomId };

    this.paramsErrorThrow(!talkRoom.id);

    const talkRoomLoad = await TalkRoom.build(talkRoom).reload();
    const userListLoad = <User[]>await talkRoomLoad.$get('userList');
    const plainUserList = userListLoad.map(this.deleteAndPlainData);

    const talksLoad = <Talk[]>await talkRoomLoad.$get('talkList');

    return {
      TalkRoom: talkRoomLoad,
      UserList: userListLoad,
      TalkList: talksLoad,
    };
  };

  public listRead = async (user: any) => {
    const userLoad = await User.build(user).reload();
    const talkRoomListLoad = <TalkRoom[]>await userLoad.$get('talkRoomList');

    const plainTalkRoomList = talkRoomListLoad.map(async talkRoom => {
      const userList = <User[]>await talkRoom.$get('userList');
      const plainUserList = await userList.map(this.deleteAndPlainData);
      const plainTalkRoom = this.deleteAndPlainData(talkRoom);
      return {
        ...plainTalkRoom,
        UserList: plainUserList,
      };
    });

    return Promise.all(plainTalkRoomList);
  };
  /**
   * @description 유저가 talkRoom을 나가는 서비스로 만약 마지막 유저인경우에 tlakRoom을 제거해준다
   */
  public exit = async (user: any, talkRoomId?: number) => {
    const talkRoom = { id: talkRoomId };

    this.paramsErrorThrow(!talkRoom.id);

    const userTalkRoomLoad = <UserTalkRoom[]>await UserTalkRoom.findAll({
      where: {
        talkRoomId,
        userId: user.id,
      },
    });

    const count = userTalkRoomLoad.length;
    userTalkRoomLoad.forEach(val => {
      val.destroy();
    });

    if (count === 1) {
      await TalkRoom.destroy({ where: { id: <number>talkRoomId } });
    }
    return null;
  };

  public addUser = async (talkroomId?: number, friendId?: number) => {
    this.paramsErrorThrow(!talkroomId || !friendId);

    const talkroom = { id: talkroomId };
    const friend = { id: friendId };

    const talkroomLoad = await TalkRoom.build(talkroom).reload();
    const friendLoad = await User.build(friend).reload();

    talkroomLoad.$add('userList', friendLoad);

    return friendLoad.get({ plain: true });
  };
}
