import { Request, Response, Router, NextFunction, Application } from 'express';
import { UserService } from '../../service';
import { auth } from '../utile';
import { Controller } from '../controller';

export class UserController extends Controller<UserService> {
  constructor() {
    super(new UserService());

    this.router.post('/', this.asyncWarp(this.login));
    this.router.get('/', auth, this.asyncWarp(this.userList));
    this.router.get('/auth/', auth, this.asyncWarp(this.check));
  }

  public login = async (req: Request, res: Response) => {
    const token = await this.service.login(req.body.user);
    res.status(201).json({ token });
  };

  public userList = async (req: Request, res: Response) => {
    const userList = await this.service.userList(req.body.profile);
    res.status(202).json({ userList });
  };

  public check = async (req: Request, res: Response) => {
    const profile = await this.service.check(req.body.profile);
    if (profile) res.status(201).json({ profile });
  };
}
