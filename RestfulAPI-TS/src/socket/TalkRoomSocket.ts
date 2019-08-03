import { Talk } from '../database/models/Talk.model';
export class TalkRoomSocket {
  space: SocketIO.Namespace;
  constructor(private id: string, private socket: SocketIO.Socket) {
    socket.join(id);
    this.space = socket.server.to(id);
    socket.on(`/talk-room/${id}`, this.receiveTalk);
  }

  public receiveTalk = async (talk: any) => {
    const talkCreate = await Talk.create({
      message: talk.message,
      talkRoomId: Number.parseInt(this.id, undefined),
      userId: talk.userId,
      createdAt: talk.createdAt,
    });
    this.space.emit(`/talk-room/${this.id}`, talkCreate.toJSON());
  };
}
