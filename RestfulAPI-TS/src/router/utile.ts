import { EventEmitter } from 'events';
import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';
import { createMocks, MockResponse, RequestMethod } from 'node-mocks-http';
import { secret } from '../../private-key.json';
import { User } from '../database/models/User.model';
import { CoustomError } from '../index';

export const auth = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.headers['x-access-token'] || req.query.token;

    if (!token) throw new CoustomError('not logged in', 401);

    const profile = <User>verify(token, secret);

    const userLoad = <User>await User.findByPk(profile.id);

    req.body.profile = userLoad.get({ plain: true });
  } catch (error) {
    next(error);
  }
  next();
};

const setMocks = (method?: RequestMethod, data?: object) =>
  createMocks(
    {
      method,
      ...data,
    },
    { eventEmitter: EventEmitter },
  );

export const testProfile = {
  id: 1,
  platformName: 'google',
  socialId: 'tjdans174@gmail.com',
  nickName: '강성문',
  photos:
    // tslint:disable-next-line: max-line-length
    'https://lh3.googleusercontent.com/-CM57SJbKGEE/AAAAAAAAAAI/AAAAAAAAAAA/AKxrwcaiCCOhELETUdml3bdnYYf56nIv3A/s96-c/photo.jpg',
  createdAt: '2019-02-16 12:28:00',
  updatedAt: '2019-02-16 12:28:00',
};

const mockAfterAuth = (method: RequestMethod, data?: object) => {
  const { req, res } = setMocks(method, data);
  req.body = {
    ...req.body,
    profile: testProfile,
  };
  return { req, res };
};

// eslint-disable-next-line no-underscore-dangle
const getData = ({ res }: { res: MockResponse<Response> }) =>
  JSON.parse(res._getData());

export const testCaseUtile = {
  setMocks,
  mockAfterAuth,
  getData,
};

export const middleWareCoustomErrorCatch = (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (error instanceof CoustomError) {
    res.status(error.status).json(error.message);
    next();
  }
  next(error);
};

export const middleWareETCErrorCatch = (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  console.log(error);
  res.status(500).json(error);

  next();
};
