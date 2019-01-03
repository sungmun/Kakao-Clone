import jwt from "jsonwebtoken";
import Model from "../../models";
import { secret } from "../../../private-key.json";
const sendMessage = (success, message) => ({ success, message });

exports.login = (req, res) => {
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

    const respond = token => res.status(201).json(sendMessage(true, { token }));

    const OnError = error =>
        res.status(403).json(sendMessage(false, error.message));

    reqCheak
        .then(memberfind)
        .then(tokenIssue)
        .then(respond)
        .catch(OnError);
};

exports.check = (req, res) => {
    const token = req.headers["x-access-token"] || req.query.token;

    const promiss = new Promise((resolve, reject) => {
        if (!token) reject(Error("not loggged in"));

        jwt.verify(token, secret, (err, decode) =>
            err ? reject(Error("잘못된 토큰입니다.")) : resolve(decode)
        );
    });

    const respond = profile =>
        res.status(201).json(sendMessage(true, { profile }));

    const onError = error =>
        res.status(403).json(sendMessage(false, error.message));

    promiss
        .then(profile => Model.Members.findByPk(profile.id))
        .then(respond)
        .catch(onError);
};
