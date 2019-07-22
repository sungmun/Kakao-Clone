export interface ITalk {
  id: number;
  message: string;
  createdAt: Date;
  updatedAt: Date;
  userId: number;
  talkRoomId: number;
}

export interface ITalkAddProfile extends ITalk {
  isUser: boolean;
}
