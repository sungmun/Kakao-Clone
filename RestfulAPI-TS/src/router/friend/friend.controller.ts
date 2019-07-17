import { Request, Response } from 'express';
import { FriendService } from '../../service';
import { Controller } from '../controller';

export class FriendController extends Controller<FriendService> {
  constructor() {
    super(new FriendService());

    this.router.post('/', this.asyncWarp(this.save));
    this.router.get('/', this.asyncWarp(this.read));
    this.router.delete('/:id', this.asyncWarp(this.remove));
  }

  public read = async (req: Request, res: Response) => {
    const friendList = await this.service.read(req.body.profile);

    res.status(201).json({ friend: friendList });
  };

  public save = async (req: Request, res: Response) => {
    const { profile: user, friend } = req.body;

    const saveFriend = await this.service.save(user, friend);

    res.status(204).json({ friend: saveFriend });
  };

  public remove = async (req: Request, res: Response) => {
    const { profile: user } = req.body;
    const friend = req.params.id;

    await this.service.remove(user, friend);

    res.status(204).json();
  };
}
