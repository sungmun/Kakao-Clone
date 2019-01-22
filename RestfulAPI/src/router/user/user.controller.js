import jwt from "jsonwebtoken";
import Model from "../../database/models";
import { secret } from "../../../private-key.json";
import { messageFormat } from "../utile";
exports.login = (req, res, next) => {
    const reqCheak = new Promise((resolve, reject) => {
        req.body.user || reject(Error("유저 정보가 없습니다"));
        resolve(req.body.user);
    });

    const tokenIssue = profile => jwt.sign({ id: profile.id }, secret);

    const memberfind = profile =>
        Model.Members.findOne({
            where: {
                platformName: profile.platformName,
                socialId: profile.socialId
            }
        }).then(result => result || Model.Members.create(profile));

    const respond = token =>
        res.status(201).json(messageFormat(true, { token }));

    const OnError = error =>
        res.status(403).json(messageFormat(false, error.message));

    reqCheak
        .then(memberfind)
        .then(tokenIssue)
        .then(respond)
        .catch(OnError);
};

exports.check = (req, res) => {
        res.status(201).json(
            messageFormat(true, { profile: req.body.profile })
        );
};
