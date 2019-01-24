import Model from "../../database/models";
import { messageFormat } from "../utile";

export const read = (req, res, next) => {
    const user = req.body.profile;

    const convertDatavaluesToProfile = data =>
        Promise.all(
            data[0].friend.map(friend => {
                delete friend.dataValues.friends;
                return { profile: friend.dataValues };
            })
        );

    const respond = dataArray => {
        res.status(201).json(messageFormat(true, { friend: dataArray }));
    };

    const OnError = error => {
        res.status(403).json(messageFormat(true, error.message));
    };

    Model.User.findAll({
        where: { id: user.id },
        include: [{ model: Model.User, as: "friend" }]
    })
        .then(convertDatavaluesToProfile)
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
};

export const remove = (req, res, next) => {
    res.status(201).json(messageFormat(true, {}));
    next();
};
