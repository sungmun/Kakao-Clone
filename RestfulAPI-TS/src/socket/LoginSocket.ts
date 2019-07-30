import { TalkRoomSocket } from './TalkRoomSocket';

export class LoginSocket {
  constructor(private socket: SocketIO.Socket) {
    socket.on('/login', this.login);
    socket.on('/login/talk-room', this.loginTalkRoom);
  }

  public login = (message: any) => {
    this.socket.emit('Success socket server login');
  };

  public loginTalkRoom = (message: any) => {
    const { talkRoomId } = message;

    new TalkRoomSocket(talkRoomId, this.socket);
  };
}
