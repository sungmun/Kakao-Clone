import express from "express";
import { auth } from "./utile";

import User from "./user";
import Friend from "./friend";
import TalkRoom from "./talk-room";

const Router = express.Router();

Router.use("/user", User);
Router.use("/friend", auth, Friend);
Router.use("/talk-room", auth, TalkRoom);

export default Router;
