export interface ITalk extends IUnLoadTalk {
  id: number;
  talkRoomId: number;
}

export interface ITalkAddProfile extends ITalk {
  isUser: boolean;
}

export interface IUnLoadTalk {
  message: string;
  createdAt: Date;
  updatedAt: Date;
  userId: number;
}
