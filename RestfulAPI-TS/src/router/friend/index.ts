import { FriendController } from './friend.controller';

const friendControllerInstance = new FriendController();

export const friendRouter = friendControllerInstance.router;
