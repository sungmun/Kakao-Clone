import { Dispatch } from 'redux';
import { ITalk } from 'src/interface/talk.interface';
import { talkActions } from 'src/reducer/talk';

export class SocketTalkRoom {
  public dispatch: Dispatch;
  constructor(public socket: SocketIOClient.Socket, public id: number) {
    socket.on(`/talk-room/${id}`, this.receiveTalk);
  }

  public receiveTalk = (talk: ITalk) => {
    this.dispatch(talkActions.setAddData(talk, this.id));
  };

  public set Dispatch(v: Dispatch) {
    this.dispatch = v;
  }
}
