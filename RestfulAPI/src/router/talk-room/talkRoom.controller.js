import Model from '../../database/models';

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
            return value;
        });

    const respond = () => res.status(201);

    friendsCheack
        .then(userBuild)
        .then(userData => userData.getFriendList())
        .then(data => data || Error('데이터가 없습니다'))
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

    new Promise((resolve, reject) => {
        reject(Error('내용이 없음'));
    })
        .catch(OnError)
        .finally(next);
};
// talkRoom리스트보기
export const listRead = (req, res, next) => {
    const { profile: user } = req.body;

    const OnError = ({ message }) => res.status(403).json(message);

    Model.User.build(user)
        .reload()
        .catch(OnError)
        .finally(next);
};

// talkRoom 변경
export const updata = (req, res, next) => {
    const OnError = ({ message }) => res.status(403).json(message);

    new Promise((resolve, reject) => {
        reject(Error('내용이 없음'));
    })
        .catch(OnError)
        .finally(next);
};

// talkRoom 마지막 남은 유저 나가기
export const remove = (req, res, next) => {
    const OnError = ({ message }) => res.status(403).json(message);

    const promise = new Promise((resolve, reject) => {
        reject(Error('내용이 없음'));
        resolve();
    });

    promise.catch(OnError).finally(next);
};

// talkRoom 유저추가
export const addUser = (req, res, next) => {
    const { talkroom, friend } = req.body;

    const paramsCheack = new Promise((resolve, reject) => {
        if (talkroom === undefined || friend === undefined)
            reject(Error('params가 없습니다'));
        resolve(talkroom);
    });

    const OnError = ({ message }) => res.status(403).json(message);

    const respond = () => res.status(201).json({ friend });

    const addFriend = room =>
        room.addUserList(Model.User.build(friend).reload());

    paramsCheack
        .then(() => Model.TalkRoom.build(talkroom).reload())
        .then(addFriend)
        .then(respond)
        .catch(OnError)
        .finally(next);
};
