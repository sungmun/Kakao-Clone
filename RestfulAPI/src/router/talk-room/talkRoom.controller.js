import Model from '../../database/models';
import '@babel/polyfill';

const deleteAttribute = async (data = [], attr) => {
    const temp = await data.get({ plain: true });
    delete temp[attr];
    return temp;
};

// talkRoom생성
export const save = (req, res, next) => {
    const { profile: user, friends } = req.body;

    const friendsCheack = new Promise((resolve, reject) => {
        if (friends === undefined) reject(Error('friends 값이 없습니다'));
        if (!Array.isArray(friends)) reject(Error('friends 배열이 아닙니다'));
        resolve(friends);
    });

    const OnError = ({ message }) => res.status(403).json(message);

    const userBuild = () => Model.User.build(user).reload();

    const createTalkRoom = friendList =>
        Model.TalkRoom.create().then(value => {
            friendList.map(friend =>
                value.addUserList(Model.User.build(friend))
            );
            value.addUserList(Model.User.build(user));
            return value;
        });

    const respond = () => res.status(201).send();

    friendsCheack
        .then(userBuild)
        .then(userData => userData.getFriendList())
        .then(data => data || Promise.reject(Error('데이터가 없습니다')))
        .then(friendList =>
            friendList.map(friend => friend.get({ plain: true }))
        )
        .then(friendList =>
            friendList.filter(friend => friends.indexOf(friend.id) !== -1)
        )
        .then(createTalkRoom)
        .then(respond)
        .catch(OnError)
        .finally(next);
};

// talkRoom내용 보기
export const read = (req, res, next) => {
    const OnError = ({ message }) => res.status(403).json(message);

    const talkRoomCheack = new Promise((resolve, reject) => {
        const talkRoom = { id: req.params.talkRoom };
        if (talkRoom.id === undefined) reject(Error('params가 없습니다'));
        resolve(talkRoom);
    });

    const respond = ArrayValue => {
        const [TalkRoom, UserList, TalkList] = ArrayValue;
        res.status(201).json({ TalkRoom, UserList, TalkList });
    };

    talkRoomCheack
        .then(talkRoom => Model.TalkRoom.build(talkRoom).reload())
        .then(DBtalkRoom =>
            Promise.all([
                DBtalkRoom,
                DBtalkRoom.getUserList(),
                DBtalkRoom.getTalks()
            ])
        )
        .then(ArrayValue =>
            ArrayValue.map(value => {
                return !Array.isArray(value)
                    ? value.get({ plain: true })
                    : value.map(el => el.get({ plain: true }));
            })
        )
        .then(respond)
        .catch(OnError)
        .finally(next);
};

// talkRoom리스트보기
export const listRead = async (req, res) => {
    const { profile: user } = req.body;

    const OnError = e => {
        res.status(403).json(e.message);
    };

    const respond = DBtalkRoomList =>
        res.status(201).json({ talkRoomList: DBtalkRoomList });

    try {
        const DBuser = await Model.User.build(user).reload();
        const DBtalkRoomList = await DBuser.getTalkRoomList();

        const coustomList = await Promise.all(
            DBtalkRoomList.map(async DBtalkRoom => {
                const talkRoom = await deleteAttribute(
                    DBtalkRoom,
                    'UserTalkRooms'
                );

                talkRoom.userList = await DBtalkRoom.getUserList()
                    .map(userData => deleteAttribute(userData, 'UserTalkRooms'))
                    .filter(userData => userData.id !== user.id);

                return talkRoom;
            })
        );

        respond(coustomList);
    } catch (e) {
        OnError(e);
    }
};

// talkRoom 마지막 남은 유저 나가기
export const remove = async (req, res) => {
    const { profile: user } = req.body;
    const OnError = ({ message }) => res.status(403).json(message);
    const respond = () => res.status(204).send();

    try {
        const talkRoom = { id: req.params.talkRoom };
        if (talkRoom.id === undefined) throw new Error('params가 없습니다');

        await Model.userTalkRooms.destroy({
            where: {
                talkId: talkRoom.id,
                userId: user.id
            }
        });

        respond();
    } catch (error) {
        OnError(error);
    }
};

// talkRoom 유저추가
export const addUser = async (req, res) => {
    let { talkroom, friend } = req.body;

    let ErrStr;
    const OnError = ({ message }) => res.status(403).json(message);
    const respond = () => res.status(201).json({ friend });
    try {
        if (talkroom === undefined && friend === undefined) ErrStr = 'params';
        else if (talkroom === undefined) ErrStr = 'talkRoom';
        else if (friend === undefined) ErrStr = 'friend';

        if (ErrStr !== undefined) throw new Error(`${ErrStr} 값이 없습니다.`);

        talkroom = await Model.TalkRoom.build(talkroom).reload();

        friend = await Model.User.build(friend).reload();

        talkroom.addUserList(friend);

        respond(friend);
    } catch (error) {
        OnError(error);
    }
};
