import express from "express";
import User from "./user";
import Friend from "./friend";

const Router = express.Router();

Router.use("/user", User);
Router.use("/friend", cheack, Friend);

export default Router;
