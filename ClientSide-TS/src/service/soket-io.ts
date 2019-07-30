import { endPoint } from 'api-key.json';
import { connect } from 'socket.io-client';
import { IUnLoadTalk } from 'src/interface/talk.interface';
import { ITalkRoom } from 'src/interface/talkRoom.interface';
import { IUser } from 'src/interface/user.interface';
import { SocketTalkRoom } from 'src/service/SocketTalkRoom';

export class SocketClient {
  public static instanse: SocketClient = new SocketClient();
  private clientConnect: SocketIOClient.Socket;
  private talkRoomList: SocketTalkRoom[];
  private token: string;
  constructor() {
    this.clientConnect = connect(endPoint);
  }

  public login = (token: string, profile: IUser) => {
    this.token = token;
    this.clientConnect.emit('/login', { profile, token: this.token });
  };

  public loginTalkRoom = (talkRoomList: ITalkRoom[]) => {
    this.talkRoomList = talkRoomList.map(talkRoom => {
      this.clientConnect.emit('/login/talk-room', {
        talkRoomId: talkRoom.id,
        token: this.token,
      });
      return new SocketTalkRoom(this.clientConnect, talkRoom.id);
    });
  };

  public sendMessage = (token: string, talk: IUnLoadTalk, roomId: number) => {
    this.token = token;
    this.clientConnect.emit(`/talk-room/${roomId}`, talk);
  };

  public get TalkRoomList(): SocketTalkRoom[] {
    return this.talkRoomList;
  }
}
