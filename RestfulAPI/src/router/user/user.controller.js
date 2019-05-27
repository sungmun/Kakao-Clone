import '@babel/polyfill';
import jwt from 'jsonwebtoken';
import { secret } from '../../../private-key.json';
import Model from '../../database/models';

export const login = async (req, res) => {
    try {
        const { user } = req.body;
        if (!user) throw Error('유저 정보가 없습니다');

        let member = await Model.User.findOne({
            where: {
                platformName: user.platformName,
                socialId: user.socialId
            }
        });

        if (!member) member = await Model.User.create(user);

        const token = await jwt.sign({ id: member.id }, secret, {
            expiresIn: '3h'
        });

        res.status(201).json({ token });
    } catch (e) {
        res.status(403).json(e.message);
    }
};

export const userList = async (req, res) => {
    try {
        const { profile } = req.body;
        if (!profile) throw Error('유저 정보가 없습니다');

        const userListData = await Model.User.findAll();
        userListData.map(user => user.get({ plain: true }));

        res.status(202).json({ userList: userListData });
    } catch (error) {
        console.log(error);
        res.status(403).json(error.message);
    }
};

export const cheack = (req, res) => {
    if (Object.keys(req.body).length !== 0) {
        res.status(201).json({ profile: req.body.profile });
    }
};
