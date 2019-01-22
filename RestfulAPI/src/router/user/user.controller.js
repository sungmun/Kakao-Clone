import jwt from "jsonwebtoken";
import Model from "../../database/models";
import { secret } from "../../../private-key.json";
import { messageFormat } from "../utile";
export const login = (req, res, next) => {
    const reqCheak = new Promise((resolve, reject) => {
        req.body.user || reject(Error("유저 정보가 없습니다"));
        resolve(req.body.user);
    });

    const tokenIssue = profile => jwt.sign({ id: profile.id }, secret);

    const memberfind = profile =>
        Model.User.findOne({
            where: {
                platformName: profile.platformName,
                socialId: profile.socialId
            }
        }).then(result => result || Model.User.create(profile));

    const respond = token =>
        res.status(201).json(messageFormat(true, { token }));

    const OnError = error =>
        res.status(403).json(messageFormat(false, error.message));

    reqCheak
        .then(memberfind)
        .then(tokenIssue)
        .then(respond)
        .catch(OnError)
        .then(next);
};

export const cheack = (req, res, next) => {
    if (0 !== Object.keys(req.body).length) {
        res.status(201).json(
            messageFormat(true, { profile: req.body.profile })
        );
    }
    next();
};
