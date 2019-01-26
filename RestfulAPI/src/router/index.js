import express from "express";
import User from "./user";
import Friend from "./friend";
import { auth } from "./utile";

const Router = express.Router();

Router.use("/user", User);
Router.use("/friend", auth, Friend);

export default Router;
