import express from "express";
import User from "./user";

var route = express.Router();

route.use("/user", User);

export default route;
