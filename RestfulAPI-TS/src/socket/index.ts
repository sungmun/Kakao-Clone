import { LoginSocket } from './LoginSocket';

export class SocketServer {
  constructor(socketIO: SocketIO.Server) {
    socketIO.on('connection', this.connect);
  }
  public connect = (socket: SocketIO.Socket) => {
    new LoginSocket(socket);
  };
}
