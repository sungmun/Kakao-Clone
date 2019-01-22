import express from "express";
import User from "./user";
import Friend from "./friend";

const Router = express.Router();

Router.use("/user", User);
Router.use("/friend", Friend);

export default Router;
