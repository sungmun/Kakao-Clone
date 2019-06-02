import Model from "../../database/models";
import "@babel/polyfill";

const plainDBdata = async data => {
  const temp = await data.get({ plain: true });
  return temp;
};

// talkRoom생성
export const save = async (req, res) => {
  try {
    const { profile: user, friends } = req.body;
    if (friends === undefined) throw Error("friends 값이 없습니다");
    if (!Array.isArray(friends)) throw Error("friends 배열이 아닙니다");

    const DBUser = await Model.User.build(user).reload();
    const DBFriendList = await DBUser.getFriendList();

    DBFriendList.filter(friend => friends.indexOf(friend.id) !== -1);

    const talkRoom = await Model.TalkRoom.create();
    DBFriendList.map(friend => talkRoom.addUserList(friend));
    talkRoom.addUserList(Model.User.build(user));

    res.status(201).send();
  } catch (error) {
    res.status(403).json(error.message);
  }
};

// talkRoom내용 보기
export const read = async (req, res) => {
  try {
    const talkRoom = { id: req.params.talkRoom };
    if (talkRoom.id === undefined) throw Error("params가 없습니다");

    const DBTalkRoom = await Model.TalkRoom.build(talkRoom).reload();
    const DBTalkRoomUserList = await DBTalkRoom.getUserList();
    const DBTalkRoomTalks = await DBTalkRoom.getTalks();

    await Promise.all(DBTalkRoomUserList.map(plainDBdata));
    await Promise.all(DBTalkRoomTalks.map(plainDBdata));

    res.status(201).json({
      TalkRoom: await plainDBdata(DBTalkRoom),
      UserList: DBTalkRoomUserList,
      TalkList: DBTalkRoomTalks
    });
  } catch (error) {
    res.status(403).json(error.message);
  }
};

// talkRoom리스트보기
export const listRead = async (req, res) => {
  try {
    const { profile: user } = req.body;
    const DBuser = await Model.User.build(user).reload();
    const DBtalkRoomList = await DBuser.getTalkRoomList();

    const deleteAttribute = async (data = []) => {
      const temp = await data.get({ plain: true });
      delete temp.UserTalkRooms;
      return temp;
    };

    const talkRoomList = DBtalkRoomList.map(async DBtalkRoom => {
      const userList = await DBtalkRoom.getUserList();

      userList.filter(userData => userData.id !== user.id);

      await Promise.all(
        userList.map(async userData => {
          const data = await deleteAttribute(userData);
          return data;
        })
      );

      return { ...(await deleteAttribute(DBtalkRoom)), userList };
    });

    res.status(201).json({ talkRoomList: await Promise.all(talkRoomList) });
  } catch (e) {
    res.status(403).json(e.message);
  }
};

// talkRoom 마지막 남은 유저 나가기
export const remove = async (req, res) => {
  try {
    const { profile: user } = req.body;
    const talkRoom = { id: req.params.talkRoom };

    if (talkRoom.id === undefined) throw new Error("params가 없습니다");

    await Model.userTalkRooms.destroy({
      where: {
        talkId: talkRoom.id,
        userId: user.id
      }
    });

    res.status(204).send();
  } catch (error) {
    res.status(403).json(error.message);
  }
};

// talkRoom 유저추가
export const addUser = async (req, res) => {
  try {
    const { talkroom, friend } = req.body;
    let ErrStr;
    if (talkroom === undefined && friend === undefined) ErrStr = "params";
    else if (talkroom === undefined) ErrStr = "talkRoom";
    else if (friend === undefined) ErrStr = "friend";

    if (ErrStr !== undefined) throw new Error(`${ErrStr} 값이 없습니다.`);

    const DBtalkroom = await Model.TalkRoom.build(talkroom).reload();

    const DBfriend = await Model.User.build(friend).reload();

    DBtalkroom.addUserList(DBfriend);

    res.status(201).json({ friend: DBfriend });
  } catch (error) {
    res.status(403).json(error.message);
  }
};
