import jwt from 'jsonwebtoken';
import Model from '../../database/models';
import { secret } from '../../../private-key.json';

export const login = (req, res, next) => {
    let { user } = req.body;

    const reqCheak = new Promise((resolve, reject) => {
        user = user || reject(Error('유저 정보가 없습니다'));
        resolve(user);
    });

    const tokenIssue = profile =>
        jwt.sign({ id: profile.id }, secret, { expiresIn: '3h' });

    const respond = token => res.status(201).json({ token });

    const OnError = ({ message }) => res.status(403).json(message);

    const memberfind = profile =>
        Model.User.findOne({
            where: {
                platformName: profile.platformName,
                socialId: profile.socialId
            }
        }).then(result => result || Model.User.create(profile));

    reqCheak
        .then(memberfind)
        .then(tokenIssue)
        .then(respond)
        .catch(OnError)
        .finally(next);
};

export const cheack = (req, res) => {
    if (Object.keys(req.body).length !== 0) {
        res.status(201).json({ profile: req.body.profile });
    }
};
