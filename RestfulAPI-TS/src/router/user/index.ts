import { UserController } from './user.controller';

const userControllerInstance = new UserController();
export const userRouter = userControllerInstance.router;
