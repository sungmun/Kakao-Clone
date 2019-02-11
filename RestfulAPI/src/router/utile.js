import { secret } from "../../private-key.json";
import jwt from "jsonwebtoken";
import Model from "../database/models";
import { createMocks } from "node-mocks-http";

export const auth = (req, res, next) => {
    const token = req.headers["x-access-token"] || req.query.token;

    const promiss = new Promise((resolve, reject) => {
        if (!token) reject(Error("not loggged in"));

        jwt.verify(token, secret, (err, decode) =>
            err ? reject(Error("잘못된 토큰입니다.")) : resolve(decode)
        );
    });

    const respond = profile => (req.body.profile = profile);

    const onError = ({ message }) => {
        res.status(403).json(message);
        next(message);
    };

    promiss
        .then(profile => Model.User.findByPk(profile.id))
        .then(profile => profile.dataValues)
        .then(respond)
        .catch(onError)
        .finally(next);
};

export const messageFormat = (success, message) => ({ success, message });

export const convertMiddlewareToPromise = (middleware, { req, res }) =>
    new Promise((resolve, reject) => {
        middleware(req, res, message => {
            if (message !== undefined) reject(Error(message));
            resolve({ req, res });
        });
    });

export const TestCaseUtile = {
    convertMiddlewareToPromise,
    setTokenMocks,
    setMocks,
    getData
};

const setTokenMocks = (method, data, token) => {
    const { req, res } = setMocks(method, data);
    req.headers = { "x-access-token": token };
    return { req, res };
};

const setMocks = (method, data) =>
    createMocks({
        method: method,
        body: data
    });

const getData = ({ res }) => JSON.parse(res._getData());
