import Model from "../../database/models";
import { messageFormat } from "../utile";

export const read = (req, res, next) => {
    const user = req.body.profile;

    const respond = dataArray => {
        res.status(201).json(messageFormat(true, { friend: dataArray }));
    };

    const OnError = error => {
        res.status(403).json(messageFormat(true, error.message));
    };

    Model.User.findAll({
        where: { id: user.id },
        include: [
            {
                model: Model.Friend,
                include: [Model.User]
            }
        ]
    })
        .map(el => el.get({ plain: true }).Friends.map(el => el.User))
        .then(data => data[0])
        .then(respond)
        .catch(OnError)
        .finally(next);
};

export const save = (req, res, next) => {
    const user = req.body.profile;
    const friend = req.body.friend;

    const respond = data =>
        res.status(201).json(messageFormat(true, { friend: data }));

    const OnError = error =>
        res.status(403).json(messageFormat(true, error.message));

    Model.Friend.findOrCreate({
        where: {
            userId: user.id,
            friendId: friend
        }
    })
        .spread(friend => friend.get({ plain: true }))
        .then(respond)
        .catch(OnError)
        .finally(next);
};

export const remove = (req, res, next) => {
    const user = req.body.profile;
    const friend = req.body.friend;

    const respond = data =>
        res.status(201).json(messageFormat(true, { row: data }));

    const OnError = error =>
        res.status(403).json(messageFormat(true, error.message));

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
