import express from "express";
import { login, cheack } from "./user.controller";
import { auth } from "../utile";

const router = express.Router();

router.post("/", login);
router.get("/", auth, cheack);

export default router;
