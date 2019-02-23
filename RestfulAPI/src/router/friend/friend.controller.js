import Model from '../../database/models';

export const read = (req, res, next) => {
    const respond = dataArray => res.status(201).json({ friend: dataArray });

    const OnError = ({ message }) => res.status(403).json(message);

    Model.User.build(req.body.profile)
        .reload()
        .then(user => user.getFriendList())
        .then(friendlist =>
            friendlist.map(friend => {
                const data = friend.get({ plain: true });
                delete data.Friends;
                return data;
            })
        )
        .then(respond)
        .catch(OnError)
        .finally(next);
};

export const save = (req, res, next) => {
    const { profile: user, friend } = req.body;

    const respond = () => res.status(204).send();

    const OnError = ({ message }) => res.status(403).json(message);

    Model.Friend.findOrCreate({
        where: {
            userId: user.id,
            friendId: friend
        }
    })
        .spread(data => data.get({ plain: true }))
        .then(respond)
        .catch(OnError)
        .finally(next);
};

export const remove = (req, res, next) => {
    const { profile: user, friend } = req.body;

    const respond = () => res.status(204).send();

    const OnError = ({ message }) => res.status(403).json(message);

    Model.Friend.destroy({
        where: {
            userId: user.id,
            friendId: friend
        }
    })
        .then(respond)
        .catch(OnError)
        .finally(next);
};
