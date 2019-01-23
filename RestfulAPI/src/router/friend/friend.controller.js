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

    Model.User.findAll({
        where: { id: user.id },
        include: [{ model: Model.User, as: "friend" }]
    })
        .then(convertDatavaluesToProfile)
};

export const save = (req, res, next) => {
    res.status(201).json(messageFormat(true, {}));
    next();
};

export const remove = (req, res, next) => {
    res.status(201).json(messageFormat(true, {}));
    next();
};
