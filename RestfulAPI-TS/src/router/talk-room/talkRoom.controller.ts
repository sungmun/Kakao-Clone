import { Request, Response } from 'express';
import { TalkRoomService } from '../../service/TalkRooom.service';
import { Controller } from '../controller';

export class TalkRoomController extends Controller<TalkRoomService> {
  constructor() {
    super(new TalkRoomService());

    this.router.post('/', this.asyncWarp(this.save)); // 생성
    this.router.post('/user', this.asyncWarp(this.addUser)); // 유저추가

    this.router.get('/', this.asyncWarp(this.listRead)); // 목록
    this.router.get('/:id', this.asyncWarp(this.read)); // 내용
    this.router.get('/:id/talk', this.asyncWarp(this.readTalk)); // talk만 추출

    this.router.delete('/:id', this.asyncWarp(this.remove)); // 유저나가기
  }

  public save = async (req: Request, res: Response) => {
    const talkRoom = await this.service.save(
      req.body.profile,
      req.body.friends,
    );
    res.status(201).send({ talkRoom });
  };
  public readTalk = async (req: Request, res: Response) => {
    const talkList = await this.service.getTalk(req.params.id);

    res.status(200).json(talkList);
  };

  public read = async (req: Request, res: Response) => {
    const resData = await this.service.read(req.params.id);

    res.status(200).json(resData);
  };

  public listRead = async (req: Request, res: Response) => {
    const talkRoomList = await this.service.listRead(req.body.profile);
    res.status(200).json({ talkRoomList });
  };

  public remove = async (req: Request, res: Response) => {
    const removeRow = await this.service.exit(req.body.profile, req.params.id);
    if (removeRow === 1) res.status(204).send();
    else res.status(208).send();
  };

  public addUser = async (req: Request, res: Response) => {
    const friend = await this.service.addUser(
      req.body.talkroom,
      req.body.friend,
    );

    res.status(201).json(friend);
  };
}
