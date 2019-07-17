import express from 'express';
import { TalkRoomController } from './talkRoom.controller';

export const talkRoomRouter = new TalkRoomController().router;
