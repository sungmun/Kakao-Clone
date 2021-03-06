import jwt from "jsonwebtoken";
import { createMocks } from "node-mocks-http";
import { EventEmitter } from "events";
import { secret } from "../../private-key.json";
import Model from "../database/models";
import { seedData } from "../database/seeders/20190109075425-profile";

export const auth = (req, res, next) => {
  const token = req.headers["x-access-token"] || req.query.token;

  const promiss = new Promise((resolve, reject) => {
    if (!token || token == null) reject(Error("not loggged in"));

    jwt.verify(token, secret, (err, decode) =>
      err ? reject(Error(err.message)) : resolve(decode)
    );
  });

  const respond = profile => {
    req.body.profile = profile;
    next();
  };

  const onError = ({ message }) => {
    res.status(403).json(message);
    return message;
  };

  promiss
    .then(profile => Model.User.findByPk(profile.id))
    .then(profile => profile.get({ plain: true }))
    .then(respond)
    .catch(onError);
};

export const messageFormat = (success, message) => ({ success, message });

export const convertMiddlewareToPromise = (middleware, { req, res }) =>
  new Promise((resolve, reject) => {
    middleware(req, res, message => {
      if (message !== undefined) reject(Error(message));
      resolve({ req, res });
    });
  });

const setMocks = (method, data) =>
  createMocks(
    {
      method,
      ...data
    },
    { eventEmitter: EventEmitter }
  );

const mockAfterAuth = (method, data) => {
  const { req, res } = setMocks(method, data);
  req.body = { ...req.body, profile: seedData[0] };
  return { req, res };
};

// eslint-disable-next-line no-underscore-dangle
const getData = ({ res }) => JSON.parse(res._getData());

export const TestCaseUtile = {
  setMocks,
  mockAfterAuth,
  getData
};
