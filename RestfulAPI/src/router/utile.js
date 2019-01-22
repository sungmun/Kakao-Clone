import { secret } from "../../private-key.json";
import jwt from "jsonwebtoken";
import Model from "../database/models";
export const cheack = (req, res, next) => {
    const token = req.headers["x-access-token"] || req.query.token;

    const promiss = new Promise((resolve, reject) => {
        if (!token) reject(Error("not loggged in"));

        jwt.verify(token, secret, (err, decode) =>
            err ? reject(Error("잘못된 토큰입니다.")) : resolve(decode)
        );
    });

    const respond = profile => (req.body.profile = profile);

    const onError = error =>
        res.status(403).json(sendMessage(false, error.message));

    promiss
        .then(profile => Model.Members.findByPk(profile.id))
        .then(profile => profile.dataValues)
        .then(respond)
        .catch(onError)
        .then(next);
};

export const messageFormat = (success, message) => ({ success, message });
